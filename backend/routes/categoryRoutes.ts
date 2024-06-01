import { Router } from "express";
import {
  getAllCategories,
  getAllCategoryProducts,
} from "../Controllers/CategoryController";
const router = Router();

router.get("/", getAllCategories);
router.get("/:cid", getAllCategoryProducts);

export default router;
