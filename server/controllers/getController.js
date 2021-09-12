import ProductMessage from "../models/productModel.js";
import UserMessage from "../models/userModel.js";
import mongoose from "mongoose";

// for getting all product
export const getAllProduct = async (req, res) => {
  try {
    let result = await ProductMessage.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  console.log("id rec for single product", id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Product with that Id");
  try {
    let result = await ProductMessage.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getWishlistProduct = async (req, res) => {
  let products = [];
  try {
    let user = await UserMessage.findById(req.userId);
    for (let i = 0; i < user.wishlist; i++) {
      let data = await ProductMessage.findById(user.wishlist[i]);
      products.push(data);
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
