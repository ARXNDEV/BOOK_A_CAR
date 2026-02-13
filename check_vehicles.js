import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Vehicle from './backend/models/vehicleModel.js';

dotenv.config({ path: './backend/.env' });

const checkVehicles = async () => {
    try {
        await mongoose.connect(process.env.mongo_uri);
        console.log('Connected to MongoDB');

        const count = await Vehicle.countDocuments();
        console.log(`Total Vehicles: ${count}`);

        if (count > 0) {
            const vehicles = await Vehicle.find().limit(5);
            console.log('Sample Vehicles:', JSON.stringify(vehicles, null, 2));
        } else {
            console.log("No vehicles found in database.");
        }

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected');
    }
};

checkVehicles();
