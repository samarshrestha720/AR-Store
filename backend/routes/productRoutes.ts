import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../Controllers/ProductController";

const router = Router();

router.get("/", getAllProducts); //Get all Products
router.get("/:id", getProduct); //Get one product with id
router.post("/", addProduct); //Add Product
router.put("/", updateProduct); //Update Product
router.delete("/", deleteProduct); // Delete Product

export default router;
