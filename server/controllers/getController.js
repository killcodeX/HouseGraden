import ProductMessage from "../models/productModel.js";

// for getting all product
export const getAllProduct = async (req, res) => {
  try {
    let result = await ProductMessage.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
