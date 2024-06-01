import { Request, Response } from "express";
import prisma from "../DB/db.config";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({});
  res.status(200);
  return res.json({ msg: "User Fetch Successfully!", data: users });
};

//Login
export const getUser = async (req: Request, res: Response) => {};
