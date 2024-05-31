import { Router } from "express";
import productRoutes from "./productRoutes";
import categoryRoutes from "./categoryRoutes";

const router = Router();

router.use("/api/product", productRoutes); // all Product Routes
router.use("/api/category", categoryRoutes);

export default router;
