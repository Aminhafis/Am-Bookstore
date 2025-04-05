import booksModel from '../model/booksModel.js'

// POST - Add Book
export const postBooks = async (req, res) => {
    try {
        const { title, author, price, genre, description, quantity } = req.body;
        
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        
        const image = req.file.filename;
        let books = await booksModel.create({
            title,
            author,
            price,
            genre,
            description,
            image,
            quantity
            
        });
        
        res.status(201).json(books);
        console.log(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error!' });
    }
};

// GET - Get all Books
export const getBooks = async (req, res) => {
    try {
        const books = await booksModel.find(req.body) 
        // .populate('category');
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// UPDATE - Update a Book
export const updateBooks = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, author, price, genre, description, image} = req.body;
        
        let updatedBook = await booksModel.findByIdAndUpdate(
            id,
            { title, author, price, genre, description, image},
            { new: true }
        );
        
        res.status(200).json(updatedBook);
        console.log(updatedBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// GET - Get Book by ID
export const getBooksById = async (req, res) => {
    try {
        const {id} = req.params;
        console.log('ID:', id); // Debugging line
        let bookById = await booksModel.findById(id).populate('genre');
        res.status(200).json(bookById);
        console.log(bookById);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// DELETE - Delete Book by ID
export const deleteBooksById = async (req, res) => {
    try {
        const id = req.params.id;
        let deletedBook = await booksModel.findByIdAndDelete(id);
        res.status(200).json(deletedBook);
        console.log(deletedBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

