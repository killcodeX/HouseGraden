import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  products: [{ productId: { type: ObjectId, ref: "ProductMessage" }, quantity: Number }],
  address: {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    mobile: { type: String, required: true },
    houseno: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
  },
  totalAmount: { type: String, required: true },
  orderId: { type: String, required: true },
  paymentId: { type: String, required: true },
  userId: { type: ObjectId, ref: "UserMessage" },
  status: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const OrderMessage = mongoose.model("OrderMessage", postSchema);

export default OrderMessage;
