import booksModel from "../model/booksModel.js";
import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt'
import  jwt from "jsonwebtoken"


export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new userModel({
      name,
      email,
      password:hashedPassword,
      role,
    });

    // Save the user to the database
    await newUser.save();

    // Send response
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


//Login user controller
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    // console.log(email,password);
    try {
        let user = await userModel.findOne({ email });
        // console.log(user);

        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        // console.log(isMatch?true:false)

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id,
                role: user.role, // Include role in token payload
            },
        };

        jwt.sign(
            payload,
            "ABCDE",
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token, user });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

//view products controller
export const getProducts = async (req, res) => {
    try {
        const products = await booksModel.find();
        if (!products || products.length === 0) {
            return res.status(404).json({ msg: 'No products found' });
        }
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

