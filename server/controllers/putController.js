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

export const cancelOrder = async (req, res) => {
  const { id } = req.params;
  console.lo
  try {
    let result = await OrderMessage.findByIdAndUpdate(
      id,
      {
        $set: { status: "cancelled" },
      },
      { new: true }
    ).populate("products.productId", "title image category price");
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};