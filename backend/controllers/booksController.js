import booksModel from '../model/booksModel.js'
import cloudinary from '../config/cloudinary.js';
import streamifier from 'streamifier'

export  const postBooks = async (req, res) => {
    try {
      const { title, author, price, genre, description , quantity } = req.body;
  
      console.log('Received book data:', req.body);
      console.log('Received file:', req.file);
  
      if (!req.file) {
        return res.status(400).json({ error : "No image uploaded"})
    }
  
    const result = await new Promise((resolve, reject)=> {
        const stream = cloudinary.uploader.upload_stream(
            {resource_type: "image" },
            (error , result)=> {
                if (error) return reject(error)
                resolve(result)
            }
        )
        streamifier.createReadStream(req.file.buffer).pipe(stream)
    })

    const book = await booksModel.create({
        title,
        author,
        price,
        genre,
        description,
        image: result.secure_url,
        quantity: quantity || 1
    })

    res.status(201).json(book);
  } catch (err) {
    console.error("🔥 Error posting book:", err);
    res.status(500).json({ error: "Server error", detail: err.message });
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
        console.log("Received PUT request on /updateBooks/:id"); // inside controller

        const id = req.params.id;  // Get the ID from the route parameter
        const { title, author, price, genre, description } = req.body;
        let image;

        if (req.file) {
            // If the file is provided, we should update the image as well.
            image = req.file.path || req.file.url || req.file.location;

        } else {
            // If no new image is provided, we don't update the image field
            image = req.body.image; // You should pass the image URL from the client-side if not updating it
        }

        // Find the book by ID and update its details
        let updatedBook = await booksModel.findByIdAndUpdate(
            id,
            { title, author, price, genre, description, image },
            { new: true } // Ensure that the updated document is returned
        );

        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json(updatedBook);
        console.log(updatedBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error', detail: error.message });
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
      const deletedBook = await booksModel.findByIdAndDelete(id);
  
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      console.log('Deleted book:', deletedBook);
      res.status(200).json({ message: 'Book deleted successfully', deletedBook });
    } catch (error) {
      console.error('❌ Error deleting book:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // to search a book by title,author
  export const searchBooks = async (req, res) => {
  try {
    const query = req.query.q;
    const regex = new RegExp(query, 'i'); // case-insensitive search

    // Primary: match title or author
    const books = await booksModel.find({
      $or: [{ title: regex }, { author: regex }]
    });

    if (books.length > 0) {
      return res.json({ found: true, books });
    }

    // Fallback: return related books sorted alphabetically
    const relatedBooks = await booksModel.find({
      $or: [
        { title: { $regex: /^[a-zA-Z]/ } },
        { author: { $regex: /^[a-zA-Z]/ } }
      ]
    }).sort({ title: 1 }); // alphabetical

    return res.json({ found: false, books: relatedBooks });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: 'Server Error' });
  }
};

  

