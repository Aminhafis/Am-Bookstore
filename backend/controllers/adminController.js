import booksModel from "../model/booksModel.js";

export const addProduct = async (req, res) => {
    const { title,author, price, genre, description, image } = req.body;
   
    try {
        const newProduct = new booksModel({
            title,
            author,
            price,
            genre,
            description,
            image,
        });

        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


