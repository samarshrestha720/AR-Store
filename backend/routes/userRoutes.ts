import { Router } from "express";
import { getAllUsers, userSignUp } from "../Controllers/UserController";

const router = Router();

router.get("/", getAllUsers);
router.post("/", userSignUp);

export default router;
