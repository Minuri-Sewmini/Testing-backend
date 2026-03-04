const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables from .env file
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

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});