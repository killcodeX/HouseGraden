import OrderMessage from "../models/orderModel.js";

export const addAddressToOrder = async (req, res) => {
    console.log(req.body)
  try {
    // const result = await ProductMessage.create(req.body);
    // res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
