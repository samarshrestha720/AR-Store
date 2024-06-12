import { Request, Response } from "express";
import prisma from "../DB/db.config";
import { CartItem } from "@prisma/client";
import { verifyJwt } from "../helpers";

//Get cart of specific user with uid
export const getCart = async (req: Request, res: Response) => {
  try {
    const uid = verifyJwt(req);
    const cart = await prisma.cart.findUnique({
      where: {
        uid: uid,
      },
      include: { cartItems: true },
    });
    if (!cart) {
      return res.status(201).json({ msg: "Cart for the User not found" });
    }
    return res
      .status(200)
      .json({ msg: "Successfully Fetched Cart", data: cart });
  } catch (err) {
    res.status(500).json({ msg: "Unable to Fetch Cart", error: err });
  }
};

//Add product to cart
export const addCart = async (req: Request, res: Response) => {
  try {
    const uid = verifyJwt(req);
    const { pid, quantity }: CartItem = req.body;
    //check for the user's cart
    let cart = await prisma.cart.findUnique({
      where: { uid: uid },
      include: { cartItems: true },
    });
    if (!cart) {
      //if cart doesnot exist for a user, create one
      cart = await prisma.cart.create({
        data: { user: { connect: { uid: uid } } },
        include: { cartItems: true },
      });
    }

    //Search if the item is already in cart
    const existingCartItem = cart.cartItems.find((item) => item.pid === pid);
    if (existingCartItem) {
      //Update quantity on the already existing item in cart
      const addedCartItem = await prisma.cartItem.update({
        where: { cartItemid: existingCartItem.cartItemid },
        data: {
          quantity: existingCartItem.quantity + 1,
        },
      });
      return res.status(200).json({
        msg: "Successfully updated quantity of product in Cart",
        newItem: addedCartItem,
      });
    }

    //Finally add product to cart
    const addedCartItem = await prisma.cartItem.create({
      data: {
        cart: { connect: { cartId: cart.cartId } },
        product: { connect: { pid: pid } },
        quantity: quantity,
      },
    });
    return res.status(200).json({
      msg: "Successfully Added product to Cart",
      newItem: addedCartItem,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Error occured during addCart", error: err });
  }
};

//Remove product from cart
export const removeFromCart = async (req: Request, res: Response) => {
  try {
    const uid = verifyJwt(req);
    const { pid }: CartItem = req.body;
    const cart = await prisma.cart.findUnique({
      where: { uid: uid },
      include: { cartItems: true },
    });
    if (!cart) {
      return res.status(404).json({ msg: "Cart for the user not found" });
    }

    const cartItem = cart.cartItems.find((item) => item.pid === pid);
    if (!cartItem) {
      return res.status(404).json({ msg: "Item not found in Cart" });
    }

    //Delete the item from the CartItems Table
    const deletedItem = await prisma.cartItem.delete({
      where: { cartItemid: cartItem.cartItemid },
    });
    return res
      .status(200)
      .json({ msg: "Successfully removed item from cart", data: deletedItem });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Couldnot remove item from cart", error: err });
  }
};
