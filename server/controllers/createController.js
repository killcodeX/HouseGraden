import ProductMessage from "../models/productModel.js"

// for creating
export const createProduct = async (req, res) => {
    console.log(req.body);
    try {
      const result = await ProductMessage.create(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };