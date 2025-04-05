import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js'
import { authenticate } from '../controllers/authenticationController.js'
const router = express.Router()



// Register route
router.post('/register',registerUser)

// Login route
router.post('/login',loginUser)

// Get Products Route (Open to All Users)
router.get('/product',authenticate)


export default router