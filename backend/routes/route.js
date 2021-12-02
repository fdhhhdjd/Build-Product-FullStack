import express from "express";
import {
  getAllProduct,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controller/product.js";
const router = express.Router();
router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
export default router;
