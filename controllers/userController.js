import User from "../models/user.js";

// 🟢 Create User (Register)
export const createUser = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({
      email,
      firstName,
      lastName,
      password
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: newUser
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};