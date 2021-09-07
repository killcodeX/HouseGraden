import express from "express";
import { createProduct } from "../controllers/createController.js";
import { getAllProduct, getSingleProduct } from "../controllers/getController.js";

const router = express.Router();

// get garden
router.get("/get-all-products", getAllProduct);
router.get("/single-product/:id", getSingleProduct)

// post graden
router.post("/create-product", createProduct);

export default router;
