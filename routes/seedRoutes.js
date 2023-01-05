import express from "express";
import Product from "../models/ProductModel.js";
import data from "../data.js";
import User from "../models/UserModel.js";
const seedRouter = express.Router();
seedRouter.get("/", async (req, res) => {
  const createdProducts = await Product.insertMany(data.products);
  const createduser = await User.insertMany(data.users);
  res.send({ createdProducts, createduser });
});
export default seedRouter;
