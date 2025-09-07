import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import courseRoutes from "./router/coursesRouter.js";
import gradeRouter from "./router/gradeRouter.js"
import feedbackRouter from "./router/feedbackRouter.js";

// Load env variables
dotenv.config();

const app = express();

// ✅ Middlewares
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); // form data
app.use(cors({ origin: true, credentials: true })); // allow frontend requests

// ✅ Routes
app.use("/api", courseRoutes);
app.use("/api", gradeRouter);
app.use("/api", feedbackRouter);

// ✅ Health check route
app.get("/", (req, res) => {
    res.send("🚀 Student Profile Course Portal API is running...");
});

// ✅ Database connection + server start
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed:", err.message);
    });
