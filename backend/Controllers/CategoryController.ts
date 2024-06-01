import { Request, Response } from "express";
import prisma from "../DB/db.config";

export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany({});
  res.status(200);
  return res.json({
    status: 200,
    data: categories,
    msg: "Successfully Fetched All Categories",
  });
};

export const getAllCategoryProducts = async (req: Request, res: Response) => {
  const allProducts = await prisma.category.findMany({
    where: { cid: parseInt(req.params.cid) },
    include: { products: true },
  });
  res.status(200);
  return res.json({
    data: allProducts,
    msg: "All Products from the category fetched Successfully!",
  });
};
