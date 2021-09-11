import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import { createProduct } from "../controllers/createController.js";
import { getAllProduct, getSingleProduct } from "../controllers/getController.js";
import { filterProduct } from "../controllers/postController.js";

const router = express.Router();

// User Routes
router.post("/signup", createUser);
router.post("/signin", loginUser);

// get garden
router.get("/get-all-products", getAllProduct);
router.get("/single-product/:id", getSingleProduct)

// post graden
router.post("/create-product", createProduct);
router.post("/filter-product", filterProduct);

export default router;
