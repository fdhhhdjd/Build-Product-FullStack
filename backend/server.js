import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/route.js";
import cors from "cors";
const app = express();
try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}
// app.get("/", (req, res) => {
//   res.send("welcome tai heo fa");
// });
app.use(cors());
app.use(express.json());
app.use("/products", productRoutes);
app.listen(5000, () => console.log("server running at port 500"));
