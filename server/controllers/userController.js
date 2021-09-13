import UserMessage from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// for signup
export const createUser = async (req, res) => {
  const { fname, lname, email, password, mobile } = req.body;
  console.log(fname, lname, email, password, mobile);
  try {
    const existingUser = await UserMessage.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exist" });

    const hashPassword = await bcrypt.hash(password, 12);

    const result = await UserMessage.create({
      email,
      password: hashPassword,
      fname: fname,
      lname: lname,
      mobile: mobile,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_SECRET_KEY
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// for login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const existingUser = await UserMessage.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ message: "Your username and/or password do not match" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET_KEY
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getlikeProduct = async (req, res) => {
  const { productId } = req.body;
  try {
    const result = await UserMessage.findByIdAndUpdate(
      req.userId,
      {
        $push: { wishlist: productId },
      },
      { new: true }
    );
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getunlikeProduct = async (req, res) => {
  const { productId } = req.body;
  try {
    const result = await UserMessage.findByIdAndUpdate(
      req.userId,
      {
        $pull: { wishlist: productId },
      },
      { new: true }
    );
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProductInCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const result = await UserMessage.findByIdAndUpdate(
      req.userId,
      {
        $push: { cart: { productId: productId, quantity: quantity } },
      },
      { new: true }
    );
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProductOutCart = async (req, res) => {
  const { cartId } = req.body;
  console.log(cartId)
  try {
    const result = await UserMessage.findByIdAndUpdate(
      req.userId,
      {
        $pull: { cart: {_id: cartId }},
      },
      { new: true }
    );
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
