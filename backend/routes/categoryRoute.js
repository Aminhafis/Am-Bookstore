import express from 'express'
const router=express.Router()
import {postCategory,getCategory,updateCategory,getCategoryById,deleteCategoryById} from '../controllers/categoryController.js'


//post route
router.post('/postCategory',postCategory)

//get route
router.get('/getCategory',getCategory)

//update route
router.put('/updateCategory',updateCategory)

//getById route
router.get('/getCategoryById',getCategoryById)

//deleteById route
router.delete('/deleteCategoryById',deleteCategoryById)

export default router