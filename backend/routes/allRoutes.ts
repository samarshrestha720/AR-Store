import { Router } from "express";
import productRoutes from "./productRoutes";

const router = Router();

router.use("/api/product", productRoutes); // all Product Routes

export default router;
