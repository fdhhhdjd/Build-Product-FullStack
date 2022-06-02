import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const app = express();
try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}
app.get("/", (req, res) => {
  res.send({
    status: 200,
    msg: "welcome tai heo fa ^-^",
    success: true,
  });
});
app.use(cors());
app.use(express.json());
app.use("/products", productRoutes);
app.listen(5000, () => console.log("server running at port 500"));
