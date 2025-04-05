import express from 'express'
import { authenticate, authorizeAdmin } from '../controllers/authenticationController'
const router = express.Router()

// Add Product Route (Admin Only)
router.post('/api/product', authenticate,authorizeAdmin)
