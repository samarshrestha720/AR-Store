import { Router } from "express";
import {
  addCart,
  getCart,
  removeFromCart,
} from "../Controllers/CartController";

const router = Router();

router.get("/", getCart); //Get specific cart
router.post("/addtocart", addCart); //add prodcut to cart
router.delete("/", removeFromCart); //add prodcut to cart

export default router;
