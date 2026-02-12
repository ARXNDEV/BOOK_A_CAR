# BOOK A CAR - Setup Guide

This guide will help you get the necessary API keys and secrets to run the **BOOK A CAR** application.

## 1. MongoDB Database (Required for User/Vehicle Data)
1.  Go to **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)** and sign up for a free account.
2.  Create a new **Cluster** (the free tier is fine).
3.  **Database Access**: Create a database user (username and password). **Remember this password!**
4.  **Network Access**: Allow access from anywhere (IP Address: `0.0.0.0/0`).
5.  Click **Connect** -> **Drivers**.
6.  Copy the **Connection String**. It looks like:
    `mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority`
7.  Paste this into `backend/.env` as `mongo_uri`. **Replace `<password>` with your actual password.**

## 2. Cloudinary (Required for Image Uploads)
1.  Go to **[Cloudinary](https://cloudinary.com/users/register/free)** and sign up for a free account.
2.  Go to your **Dashboard**.
3.  You will see "Account Details" with:
    *   **Cloud Name**
    *   **API Key**
    *   **API Secret**
4.  Copy these values into your `backend/.env` file.

## 3. Email (Optional - For Booking Confirmations)
If you want the app to send real emails:
1.  Use a Gmail account.
2.  Go to **[Google App Passwords](https://myaccount.google.com/apppasswords)**.
3.  Create a new app password (name it "Book A Car").
4.  Copy the 16-character password.
5.  In `backend/.env`:
    *   `EMAIL_HOST`: Your Gmail address.
    *   `EMAIL_PASSWORD`: The 16-character app password.

## 4. JWT Secrets (Already Done)
I have already generated secure random strings for `ACCESS_TOKEN` and `REFRESH_TOKEN` in your `.env` file. You don't need to change them.

## 5. Frontend Configuration
Your `client/.env` is already set up with the Firebase key we found earlier.
*   `VITE_FIREBASE_API_KEY`: (Configured)
*   `VITE_PRODUCTION_BACKEND_URL`: `http://localhost:3000`

---
**Once you have filled in the `backend/.env` file, restart the backend server:**
1.  Click in the terminal where backend is running.
2.  Press `Ctrl + C` to stop it.
3.  Run `npm run dev` again.
