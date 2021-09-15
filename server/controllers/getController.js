import ProductMessage from "../models/productModel.js";
import UserMessage from "../models/userModel.js";
import OrderMessage from "../models/orderModel.js";
import mongoose from "mongoose";
import { calDiscount, findTax, findAmount } from "../helpers/helpers.js";

// for getting all product
export const getAllProduct = async (req, res) => {
  try {
    let result = await ProductMessage.find() //.limit(5).skip(0); //1,2,3,4,5,>> //2 0+5 //3 5+5 // 4 10+5
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
    for (let i = 0; i < user.wishlist.length; i++) {
      let data = await ProductMessage.findById(user.wishlist[i]);
      products.push(data);
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCartProduct = async (req, res) => {
  let products = [];
  try {
    let user = await UserMessage.findById(req.userId);
    if (user.cart.length == 0) {
      return res.status(200).json({ products: [], pricing: {} });
    }
    for (let i = 0; i < user.cart.length; i++) {
      let data = await ProductMessage.findById(user.cart[i].productId);
      let cart = {
        cartId: user.cart[i]._id,
        productId: data._id,
        title: data.title,
        image: data.image,
        category: data.category,
        price: data.price,
        quantity: user.cart[i].quantity,
        totalPrice: data.price * user.cart[i].quantity,
      };
      products.push(cart);
    }
    let AllItemPrice = products.reduce(
      (previousValue, currentValue) => previousValue + currentValue.totalPrice,
      0
    );
    let discount = Math.floor(Math.random() * (10, 60) + 1);
    let discountPrice = calDiscount(AllItemPrice, discount);
    let totalTax = findTax(AllItemPrice);
    let finalAmount = findAmount(AllItemPrice, discountPrice, totalTax);
    let result = {
      products: products,
      pricing: {
        totalPrice: AllItemPrice,
        discount: discount,
        discountPrice: discountPrice,
        totalTax: totalTax,
        finalAmount: finalAmount,
      },
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};