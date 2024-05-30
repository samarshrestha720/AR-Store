import { Request, Response } from "express";
import prisma from "../DB/db.config";
import { Product } from "@prisma/client";
import { STATUS_CODES } from "http";

//Add new Products
export const addProduct = async (req: Request, res: Response) => {
  const { name, description, price, salePrice, image, categoryId }: Product =
    req.body;

  const newProduct = await prisma.product.create({
    data: {
      name: name,
      description: description,
      price: price,
      salePrice: salePrice,
      image: image,
      categoryId: categoryId,
    },
  });
  return res.json({
    status: 200,
    data: newProduct,
    msg: "Product Created Successfully",
  });
};

//Get all Products
export const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await prisma.product.findMany();
  return res.json(allProducts);
};

//Get Porduct
export const getProduct = async (req: Request, res: Response) => {
  const product = await prisma.product.findFirst({
    where: { pid: parseInt(req.params.id) },
  });
  return res.json({
    status: 200,
    data: product,
    msg: "Product Successfully Fetched",
  });
};

//Edit existing Products
export const updateProduct = async (req: Request, res: Response) => {
  const data = req.body;
  const updatedProduct = await prisma.product.update({
    where: {
      pid: req.body.pid,
    },
    data: {
      name: data.name || undefined,
      description: data.description || undefined,
      price: data.price || undefined,
      salePrice: data.salePrice || undefined,
      image: data.image || undefined,
      categoryId: data.categoryId || undefined,
    },
  });
  return res.json({
    status: 200,
    data: updatedProduct,
    msg: "Product Updated Successfully",
  });
};
