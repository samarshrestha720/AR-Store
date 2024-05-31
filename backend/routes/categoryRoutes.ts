import { Router } from "express";
import { getAllCategories } from "../Controllers/CategoryController";
const router = Router();

router.get("/", getAllCategories);

export default router;
