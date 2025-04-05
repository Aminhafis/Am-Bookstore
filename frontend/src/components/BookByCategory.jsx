import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookByCategory = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const navigate = useNavigate()

  // Fetch all books from the server  
  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:12000/api/book/getData");
      const bookData = response.data;
      setBooks(bookData);
      setFilteredBooks(bookData);

      // Extract unique genres
      const uniqueGenres = [...new Set(bookData.map((book) => book.genre))];
      setGenres(uniqueGenres);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Filter books when the selected genre changes
  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredBooks(books); // Show all books if no genre is selected
    } else {
      const filtered = books.filter((book) => book.genre === selectedGenre);
      setFilteredBooks(filtered);
    }
  }, [selectedGenre, books]);

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="w-full h-auto bg-zinc-200 p-6 flex flex-col">
      {/* Genre Dropdown */}
      <div className="mb-6 flex justify-center items-center">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="w-1/4 p-2 border rounded-lg shadow-sm bg-white text-gray-800 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          <option value="">All Genres</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book._id}
              className="w-full h-auto bg-slate-100 flex flex-col items-center rounded-lg shadow-lg p-4"
            >
              <img
                className="w-48 h-56 object-cover rounded-lg shadow-md mb-4"
                src={`http://localhost:12000/images/${book.image}`}
                alt={book.title}
                onClick={()=> navigate(`/book/${book._id}`)}
              />
              <h2 className="text-xl font-semibold text-center">{book.title}</h2>
              <p className="text-gray-600 mt-2">{book.author}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No books found for this genre.</p>
        )}
      </div>
    </div>
  );
};

export default BookByCategory;
