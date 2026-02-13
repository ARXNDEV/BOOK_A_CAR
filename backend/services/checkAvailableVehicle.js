import Booking from "../models/BookingModel.js";
import Vehicle from "../models/vehicleModel.js";

//returning vehicles that are not booked in selected Date
export async function availableAtDate(pickupDate, dropOffDate) {
  try {
    //this condition only checked vehicles without booking it only checked dates it dose not checked status of trip

    // const existingBookings = await Booking.find({
    //   $or: [
    //     { pickupDate: { $lt: dropOffDate }, dropOffDate: { $gt: pickupDate } }, // Overlap condition
    //     { pickupDate: { $gte: pickupDate, $lt: dropOffDate } }, // Start within range
    //     { dropOffDate: { $gt: pickupDate, $lte: dropOffDate } }, // End within range
    //     { pickupDate: { $lte: pickupDate }, dropOffDate: { $gte: dropOffDate } }, // Booking includes the entire time range
    //   ],
    // });

    // const vehicleIds = existingBookings.map(booking => booking.vehicleId);
    // const uniqueVehicleIds = [...new Set(vehicleIds)];

    // const vehiclesWithoutBookings = await Vehicle.find({ _id: { $nin: uniqueVehicleIds } });
    // return vehiclesWithoutBookings || [];

    // Find bookings that overlap with the requested date range AND have a blocking status
    const blockingStatuses = ["booked", "onTrip", "notPicked", "overDue"];

    const overlappingBookings = await Booking.find({
      status: { $in: blockingStatuses },
      $or: [
        { pickupDate: { $lt: dropOffDate }, dropOffDate: { $gt: pickupDate } }, // Overlap condition
        { pickupDate: { $gte: pickupDate, $lt: dropOffDate } }, // Start within range
        { dropOffDate: { $gt: pickupDate, $lte: dropOffDate } }, // End within range
        {
          pickupDate: { $lte: pickupDate },
          dropOffDate: { $gte: dropOffDate },
        }, // Booking includes the entire time range
      ],
    });

    const occupiedVehicleIds = overlappingBookings.map((booking) => booking.vehicleId);
    const uniqueOccupiedVehicleIds = [...new Set(occupiedVehicleIds)];

    // Find vehicles that are NOT in the occupied list
    const availableVehicles = await Vehicle.find({
      _id: { $nin: uniqueOccupiedVehicleIds },
    });

    return availableVehicles || [];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
