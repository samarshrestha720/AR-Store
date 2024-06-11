import { Router } from "express";
import {
  getAllUsers,
  userLogin,
  userSignUp,
} from "../Controllers/UserController";

const router = Router();

router.get("/", getAllUsers);
router.post("/signup", userSignUp); //Add new user
router.post("/login", userLogin); //Find User

export default router;
