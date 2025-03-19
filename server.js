require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager API using Node.js, Express, MongoDB, Nginx and Docker!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
