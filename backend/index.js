import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from "url";

import userRoute from './routes/userRoute.js';
import booksRoutes from './routes/booksRoutes.js';
import categoryRoute from './routes/categoryRoute.js';
import cartRoute from "./routes/cartRoute.js";
import razorpayRoutes from "./routes/razorpayRoute.js";

dotenv.config()

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files (images, etc.)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
console.log("Public folder set for static content.");

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Routes
app.use('/api/user', userRoute);
app.use('/api/book', booksRoutes);  // Here is the books route
app.use('/api/category', categoryRoute);
app.use(cartRoute);
app.use("/api", razorpayRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Amin's Bookstore backend is running 🚀");
});

// Port
const port = process.env.PORT || 12000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});