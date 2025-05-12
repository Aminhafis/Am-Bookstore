import booksModel from "../model/booksModel.js";
import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt'
import  jwt from "jsonwebtoken"
import validator from 'validator';


export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role = 'user' } = req.body;

    // Validate input fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Validate password length (minimum 8 characters)
    if (!validator.isLength(password, { min: 8 })) {
      return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    // Validate password strength (must contain at least one uppercase letter and one number)
    if (!validator.matches(password, /[A-Z]/)) {
      return res.status(400).json({ message: "Password must contain at least one uppercase letter" });
    }

    if (!validator.matches(password, /[0-9]/)) {
      return res.status(400).json({ message: "Password must contain at least one number" });
    }

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
      password: hashedPassword,
      role,
    });

    // Save the user to the database
    await newUser.save();

    // Send response
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Register error:", error.message);
    res.status(500).json({ message: error.message || "Server error" });
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
            process.env.JWT_SECRET, // ✅ secure secret from .env
            { expiresIn: 360000 },
            (err, token) => {
              if (err) throw err;
              const { password, ...userWithoutPassword } = user._doc;
              res.json({ token, user: userWithoutPassword });
                          }
          );
          
        } catch (error) {
          console.error("❌ Error in registerUser:", error.message);
          console.error(error.stack);
          res.status(500).json({ message: "Server error" });
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

