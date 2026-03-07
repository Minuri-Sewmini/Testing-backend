import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// වැදගත්: import කරද්දී .js අගට අනිවාර්යයෙන්ම එකතු කරන්න
import userRouter from "./routes/userRouter.js";
import itemRouter from "./routes/itemRouter.js";
import matchRouter from "./routes/matchHubRouter.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully! ✅");
  })
  .catch((err) => {
    console.error("Connection error: ❌", err.message);
  });

// Root Route
app.get("/", (req, res) => {
  res.send("Backend is running and connected to MongoDB Atlas...");
});

// Routes
app.use("/api/users", userRouter);
app.use("/api/items", itemRouter);
app.use("/api/matches", matchRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});