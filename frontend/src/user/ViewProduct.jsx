import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ViewProduct = ({ userId }) => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const booksPerPage = 9; // 9 books per page
  const navigate = useNavigate()

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:12000/api/book/getData`);
      setBooks(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching Books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const totalPages = Math.ceil(books.length / booksPerPage);
  const currentBooks = books.slice((page - 1) * booksPerPage, page * booksPerPage);

  return (
    <div className="w-auto h-auto container mx-auto flex flex-col items-center justify-between p-6 pt-20 bg-zinc-100">
      <h1 className="text-4xl font-bold text-center mb-6">SHOP</h1>

      {books.length === 0 ? (
        <p className="text-center text-gray-400">No books available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 flex-grow">
          {currentBooks.map((book) => (
            <div key={book._id} className="flex flex-col items-center transform transition duration-300 hover:scale-105  hover: pt-10">
              <img
                className="w-48 h-56 object-cover rounded-lg shadow-lg  mb-4"
                src={`http://localhost:12000/images/${book.image}`}
                alt={book.title}
                onClick={()=> navigate(`/book/${book._id}`)}
              />
              <h2 className="text-5xl text-center font-semibold">{book.title}</h2>
              <p className="text-gray-600 mt-2">{book.author}</p>
              {/* <p className="text-green-800 mt-2 font-bold ">{book.price}$</p> */}
            
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center space-x-6 mt-10">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-5 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 disabled:bg-slate-200 transition"
          disabled={page === 1}
        >
          -
        </button>
        <span className="text-lg font-medium">
           {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-5 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition"
          disabled={page === totalPages}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ViewProduct;
