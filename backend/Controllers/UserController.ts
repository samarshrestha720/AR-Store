import { NextFunction, Request, Response } from "express";
import prisma from "../DB/db.config";
import { User } from "@prisma/client";
import { checkPassword, createJwt, hashPassword } from "../helpers";

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
    const loginState = await checkPassword(password, user.password);
    if (!loginState) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const token = createJwt(user.uid);

    return res.status(200).json({
      msg: "Login Successful",
      token: token,
      user,
    });
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
        password: await hashPassword(password),
        name: name,
        phone: phone || undefined,
        address: address,
      },
    });
    return res
      .status(200)
      .json({ msg: "User created successfully", data: user });
  } catch (err) {
    console.log(typeof password);
    console.log(password);
    console.log(err);
    return res
      .status(500)
      .json({ msg: "Error occured while creating user", error: err });
  }
};
