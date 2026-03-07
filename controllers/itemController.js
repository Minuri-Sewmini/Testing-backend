import Item from "../models/item.js";

// Add Item
export const addItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json({ message: "Item added!", item: newItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Items
export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};