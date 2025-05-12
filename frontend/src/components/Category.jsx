import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const CategoryPage = () => {
  const { genre } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://am-bookstore-mw9b.onrender.com/api/book/getData");
        const filteredBooks = response.data.filter(book => book.genre === genre);
        setBooks(filteredBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [genre]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{genre} Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book._id} className="flex flex-col items-center">
            <img
              className="w-48 h-56 object-cover rounded-lg shadow-lg mb-4"
              src={`https://am-bookstore-mw9b.onrender.com/images/${book.image}`}
              alt={book.title}
            />
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p>{book.author}</p>
            <p className="text-green-800 font-bold">{book.price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
