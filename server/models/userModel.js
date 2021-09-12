import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  wishlist: [{ type: ObjectId, ref: "ProductMessage" }],
  cart: [
    { productId: { type: ObjectId, ref: "ProductMessage" }, quantity: Number },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const UserMessage = mongoose.model("UserMessage", postSchema);

export default UserMessage;
