//for local system.
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { connectDB } from "./connection.js";
// import pricesRoutes from "./routes/prices.js";
// import bestPriceRequestRoutes from "./routes/betterPriceRoutes.js";

// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin: ["http://localhost:3000", "http://localhost:5173"]
// }));

// app.use("/api", pricesRoutes);
// app.use("/api", bestPriceRequestRoutes)

// const startServer = async () => {
//   try {
//     await connectDB();

//     const PORT = process.env.NODE_PORT || 3001;

//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();


//for server
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./connection.js";
import pricesRoutes from "./routes/prices.js";
import bestPriceRequestRoutes from "./routes/betterPriceRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

// ✅ Allow localhost + Vercel frontend + Render health checks
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://stock-price-frontend-gold.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Routes
app.use("/api", pricesRoutes);
app.use("/api", bestPriceRequestRoutes);

const startServer = async () => {
  try {
    await connectDB();

    // ✅ Render requires PORT (not NODE_PORT)
    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
