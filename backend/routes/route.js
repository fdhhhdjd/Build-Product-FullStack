const express = require("express");
const {
  getAllProduct,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/product.js");
const router = express.Router();
router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
module.exports = router;
