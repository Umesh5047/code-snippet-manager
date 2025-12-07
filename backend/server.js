import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import snippetRoutes from "./routes/snippets.js";
import errorHandler from "./middleware/errorHandler.js";

console.log("server.js file is loaded");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/snippets", snippetRoutes);

// Error handling middleware
app.use(errorHandler);

// Connect to MongoDB and start server
console.log("Starting server...");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });