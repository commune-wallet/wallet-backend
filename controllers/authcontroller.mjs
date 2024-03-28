import User from "../models/userModel.mjs";
import bcrypt from "bcrypt";
import createToken from "../utils/createToken.mjs";

const createUser = async (req, res) => {

  const { username, password } = req.body;

  if (!username || !password) {
    throw new Error("Fill the all inputs");
  }
  
  const userExists = await User.findOne({ username });
  if (userExists) return res.status(400).json({ message: "Username already exists" });

  const saltRounds = 10; 
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = new User({ username, password: hashedPassword });
  try {
    await newUser.save();
    createToken(res, newUser._id);

    return res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValid) {
      createToken(res, existingUser._id);

      return res.status(200).json({
        _id: existingUser._id,
        username: existingUser.username,
      });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } else {
    return res.status(401).json({ message: "Invalid username" });
  }
};



export {
  createUser,
  loginUser,
};
