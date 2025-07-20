import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js"; // Import DB connection
import userRoutes from "./routes/user.route.js"; // Import routes
import courseRoute from "./routes/course.route.js"; // Import course routes
import mediaRoute from "./routes/media.route.js"; // Import media routes
import purchaseRoute from "./routes/purchaseCourse.route.js"; // Import purchase routes

dotenv.config(); // Load environment variables

// Call the database connection
connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // For parsing JSON
app.use(cookieParser()); // For parsing cookies
app.use(cors({
    origin: "http://localhost:5173", // The origin of your frontend
    credentials: true, // To allow cookies to be sent
}));

// API Routes
app.use("/api/v1/media",mediaRoute);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/course", courseRoute);

app.use("/api/v1/purchase", purchaseRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
