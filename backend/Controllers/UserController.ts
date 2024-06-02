import { NextFunction, Request, Response } from "express";
import prisma from "../DB/db.config";
import { User } from "@prisma/client";

const bycrypt = require("bcrypt");

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({});
  res.status(200);
  return res.json({ msg: "User Fetch Successfully!", data: users });
};

//Login
export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      return res.status(401).json({
        msg: "Login Unsuccessful",
        error: "User not found",
      });
    }
    const loginState = await bycrypt.comapre(password, user.password);
    if (loginState) {
      res.status(200).json({
        msg: "Login Successful",
        user,
      });
    } else {
      res.status(400).json({ msg: "Invalid Credentials" });
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        msg: "An error occured",
        error: err.message,
      });
    }
  }
};

//Signup or Create User
export const userSignUp = async (req: Request, res: Response) => {
  const { email, password, name, phone, address }: User = req.body;
  const checkUser = await prisma.user.findFirst({
    where: { email: email },
  });
  if (checkUser) {
    return res
      .status(409)
      .json({ msg: "User already exists/ Email already taken" });
  }
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
        name: name,
        phone: phone || undefined,
        address: address,
      },
    });
    return res
      .status(200)
      .json({ msg: "User created successfully", data: user });
  } catch {
    return res.status(500).json({ msg: "Error occured while creating user" });
  }
};
