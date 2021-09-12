import express from "express";
import {
  createUser,
  loginUser,
  getlikeProduct,
  getunlikeProduct,
  getProductInCart,
  getProductOutCart,
} from "../controllers/userController.js";
import { createProduct } from "../controllers/createController.js";
import {
  getAllProduct,
  getSingleProduct,
  getWishlistProduct,
  getCartProduct
} from "../controllers/getController.js";
import { filterProduct } from "../controllers/postController.js";
import { AuthenticateToken } from "../middlewares/tokenValidate.js";

const router = express.Router();

// User Routes
router.post("/signup", createUser);
router.post("/signin", loginUser);
router.put("/likeproduct", AuthenticateToken, getlikeProduct);
router.put("/unlikeproduct", AuthenticateToken, getunlikeProduct);
router.put("/add-product-cart", AuthenticateToken, getProductInCart);
router.put("/remove-product-cart", AuthenticateToken, getProductOutCart);

// Post garden
router.get("/get-all-products", getAllProduct);
router.get("/single-product/:id", getSingleProduct);
router.post("/create-product", createProduct);
router.post("/filter-product", filterProduct);
router.get("/wishlist-products", AuthenticateToken, getWishlistProduct);
router.get("/cart-products", AuthenticateToken, getCartProduct);

export default router;
