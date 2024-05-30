import { Router } from "express";
import {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../Controllers/ProductController";

const router = Router();

router.get("/", getAllProducts); //Get all Products
router.get("/:id", getProduct);
router.post("/", addProduct); //Add Product
router.put("/", updateProduct); //Update Product

export default router;
