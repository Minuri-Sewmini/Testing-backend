import express from "express";
import { addItem, getItems } from "../controllers/itemController.js";

const itemRouter = express.Router();

itemRouter.post("/add", addItem);
itemRouter.get("/", getItems);

export default itemRouter;