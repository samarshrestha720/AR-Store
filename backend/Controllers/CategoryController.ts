import { Request, Response } from "express";
import prisma from "../DB/db.config";

export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany({
    include: { products: true },
  });
  return res.json({
    status: 200,
    data: categories,
    msg: "Successfully Fetched All Categories",
  });
};
