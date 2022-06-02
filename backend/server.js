const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const productRoutes = require("./Routes/route");
const db = require("./config/database");
const app = express();
try {
  db.authenticate();
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
