# 👟 Design by Sole — Implementation Guide

## 1. Backend Setup
The backend is built with **Node.js, Express, MongoDB, and Cloudinary**.

### Prerequisites
- Install **Node.js** from [nodejs.org](https://nodejs.org/)
- Have a **MongoDB Atlas** account (free tier works)
- Have a **Cloudinary** account (free tier works)

### Installation
1. Open your terminal in the project folder.
2. Run `npm install` to install all dependencies.
3. Rename `.env.example` to `.env`.
4. Fill in your credentials in the `.env` file:
   - `MONGODB_URI`: Your MongoDB connection string.
   - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: From your Cloudinary dashboard.

### Running the Server
Run `npm start` or `npm run dev` (for development).
The server will be available at **http://localhost:3000**.

## 2. Image Management (Cloudinary)
- When adding a new product via the Admin Panel, the images will automatically upload to your Cloudinary folder.
- The `server.js` handles image processing using `multer` and `multer-storage-cloudinary`.

## 3. Database (MongoDB)
- All products are stored in the `Product` collection.
- Frontend fetches data from `/api/products` on page load.
- **Fallback Logic:** If the database is empty or the server is down, the frontend automatically falls back to the hardcoded `PRODUCTS_DATA` in `shoes.js` to ensure your site always looks great.

## 4. Branding
- **Store Name:** Design by Sole
- **Primary Colors:** Gold, Black, White
- **Collections:** Heels, Sandals, Shoes

---
*Created for Design by Sole — Premium Footwear.*
