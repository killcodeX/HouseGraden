import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import gardenRoutes from "./routes/route.js";
import dotenv from "dotenv";
import Razorpay from "razorpay";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// for setting up razorpay
export const razorpay = new Razorpay({
  key_id: process.env.RAZOR_KEY_ID,
  key_secret: process.env.RAZOR_KEY_SECRET,
});

// sholud be called after initializing cors to avoid cors origin issue
app.use("/housegarden", gardenRoutes);

// for database
const connectionUrl = `mongodb+srv://Aaquib5076:${process.env.DB_PASSWORD}@cluster0.kx4ok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(connectionUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((err) => console.log(err));

//mongoose.set("useFindAndModify", false);