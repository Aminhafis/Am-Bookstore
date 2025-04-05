import express from 'express'
import path from 'path'
import  {postBooks,getBooks,updateBooks,getBooksById,deleteBooksById } from '../controllers/booksController.js'
import multer from "multer"



const router = express.Router();

// Multer setup for storing images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images'); // Folder where images are stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename with timestamp
    }
});

const upload = multer({ storage: storage });

// POST route to add a new book
router.post('/postData', upload.single('image'), postBooks);

// GET route to retrieve all books
router.get('/getData', getBooks);

// PUT route to update a book
router.put('/updateBooks', upload.single('image'), updateBooks); // Include upload if image is updated

// GET route to retrieve a book by ID
router.get('/getDataById/:id', getBooksById); // Use URL parameter for ID

// DELETE route to remove a book by ID
router.delete('/deleteDataById/:id', deleteBooksById); // Use URL parameter for ID


export default router

