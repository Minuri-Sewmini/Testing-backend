import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String, required: true },
    stock: { type: Number, default: 0 }
}, { timestamps: true });

const Item = mongoose.model("items", itemSchema);
export default Item;