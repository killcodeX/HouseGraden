import ProductMessage from "../models/productModel.js";
import UserMessage from "../models/userModel.js";
import OrderMessage from "../models/orderModel.js";
import shortid from "shortid";
import crypto from "crypto";
import { razorpay } from "../index.js";

// for filter Product
export const filterProduct = async (req, res) => {
  try {
    if (req.body.category == "All Data") {
      const result = await ProductMessage.find();
      return res.status(200).json(result);
    } else if (req.body.category) {
      const result = await ProductMessage.find(req.body);
      return res.status(200).json(result);
    } else if (req.body.rating) {
      const result = await ProductMessage.find(req.body);
      return res.status(200).json(result);
    } else if (req.body.price) {
      let [min, max] = req.body.price;
      const result = await ProductMessage.find();
      let arr = [];
      for (let i = 0; i < result.length; i++) {
        if (result[i].price >= min && result[i].price <= max) {
          arr.push(result[i]);
        }
      }
      return res.status(200).json(arr);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// process order
export const handlePayment = async (req, res) => {
  try {
    const existingUser = await UserMessage.findById(req.userId);
    const payment_capture = 1;
    const currency = "INR";
    const options = {
      amount: req.body.totalAmount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
    const response = await razorpay.orders.create(options);
    let data = {
      ...response,
      name: existingUser.fname + " " + existingUser.lname,
      email: existingUser.email,
      mobile: existingUser.mobile,
    };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

// for booking sucessful
export const orderSuccess = async (req, res) => {
  const { products } = req.body;
  try {
    const data = {
      ...req.body,
      userId: req.userId,
    };

    const result = await OrderMessage.create(data);

    for (let i = 0; i < products.length; i++) {
      await UserMessage.findByIdAndUpdate(
        req.userId,
        {
          $pull: { cart: { _id: products[i].cartId } },
        },
        { new: true }
      );
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

export const getOrderProduct = async (req, res) => {
  const { status } = req.body;
  try { // 
    if (status == "Cancelled Orders") {
      let result = await OrderMessage.find({ userId: req.userId, status: "cancelled" }).populate(
        "products.productId",
        "title image category price"
      );
      return res.status(200).json(result);
    } else if(status == "Received Orders"){ //{userId: req.userId, status: "received" }
      let result = await OrderMessage.find({userId: req.userId, status: "received" }).populate(
        "products.productId",
        "title image category price"
      );
      return res.status(200).json(result); //
    }
    let result = await OrderMessage.find({ userId: req.userId, status: "confirmed" }).populate(
      "products.productId",
      "title image category price"
    );
    return res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
