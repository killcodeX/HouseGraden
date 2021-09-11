import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: String, required: true },
  totalReviews: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  about: { type: String, required: true },
  details: {
    commonName: { type: String, required: true },
    bloomTime: { type: String, required: true },
    diffculty: { type: String, required: true },
    sunlight: { type: String, required: true },
    water: { type: String, required: true },
    temp: { type: String, required: true },
  },
  reviews: [
    {
      image: { type: String, required: true },
      name: { type: String, required: true },
      postedOn: { type: Date, required: true },
      title: { type: String, required: true },
      review: { type: String, required: true },
    },
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

const ProductMessage = mongoose.model("ProductMessage", postSchema);

export default ProductMessage;
