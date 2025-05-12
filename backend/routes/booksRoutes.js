import express from 'express';
import { upload } from '../middlewares/multerMemory.js'; // ✅ use only this
import { postBooks,getBooks,updateBooks,getBooksById,deleteBooksById } from '../controllers/booksController.js';

const router = express.Router();

// ✅ POST route to add a new book
router.post('/postData', upload.single('image'), postBooks);
console.log('💾 Multer Middleware Applied');

// ✅ GET route to retrieve all books
router.get('/getData', getBooks);

// ✅ PUT route to update a book
router.put('/updateBooks', upload.single('image'), updateBooks);

// ✅ GET route to retrieve a book by ID
router.get('/getDataById/:id', getBooksById);

// ✅ DELETE route to remove a book by ID
router.delete('/deleteDataById/:id', deleteBooksById);

export default router;
