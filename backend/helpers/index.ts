import { Request } from "express";

const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

export const hashPassword = async (password: string): Promise<string> =>
  await bycrypt.hash(password, saltRounds);

export const checkPassword = async (
  givenPassword: string,
  dbPassword: string
): Promise<string> => {
  return await bycrypt.compare(givenPassword, dbPassword);
};

export const createJwt = (uid: number): string => {
  const userForToken = {
    uid: uid,
  };
  return jwt.sign(userForToken, process.env.JWT_SECRET, {
    expiresIn: 3 * 60 * 60,
  });
};

export const verifyJwt = (req: Request): number | undefined => {
  const authorization = req.headers.authorization;
  if (authorization && authorization.startsWith("Bearer ")) {
    const token = authorization.split(" ")[1];
    if (!token) {
      throw new Error("Token not Found in Header");
    }
    try {
      return jwt.verify(token, process.env.JWT_SECRET).uid;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  return undefined;
};
