import express from 'express';
import { upload } from '../middlewares/multerMemory.js'; // ✅ use only this
import { postBooks,getBooks,updateBooks,getBooksById,deleteBooksById } from '../controllers/booksController.js';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware.js'

const router = express.Router();

// ✅ POST route to add a new book
router.post('/postData', upload.single('image'), postBooks);
console.log('💾 Multer Middleware Applied');

// ✅ GET route to retrieve all books
router.get('/getData', getBooks);

// ✅ PUT route to update a book
router.put('/updateBooks/:id', upload.single('image'), updateBooks);
console.log("Books routes loaded"); // in booksRoutes.js


// ✅ GET route to retrieve a book by ID
router.get('/getDataById/:id', getBooksById);

// ✅ DELETE route to remove a book by ID
router.delete('/deleteDataById/:id', verifyToken, isAdmin, deleteBooksById);

export default router;
