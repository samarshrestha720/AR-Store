import { Router } from "express";
import productRoutes from "./productRoutes";
import categoryRoutes from "./categoryRoutes";
import userRoutes from "./userRoutes";
import cartRoutes from "./cartRoutes";

const router = Router();

router.use("/api/product", productRoutes); // all Product Routes
router.use("/api/category", categoryRoutes);
router.use("/api/user", userRoutes);
router.use("/api/cart", cartRoutes);

export default router;
