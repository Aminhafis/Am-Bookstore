import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ViewProduct = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const booksPerPage = 9;
  const navigate = useNavigate();

  const isAdmin = localStorage.getItem("role") === "admin";

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://am-bookstore-mw9b.onrender.com/api/book/getData`);
      setBooks(response.data);
    } catch (error) {
      toast.error("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this book?");
    if (!confirm) return;

    try {
      await axios.delete(`https://am-bookstore-mw9b.onrender.com/api/book/deleteBooks/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Book deleted successfully");
      fetchBooks();
    } catch (err) {
      toast.error("Failed to delete book");
    }
  };

  const totalPages = Math.ceil(books.length / booksPerPage);
  const currentBooks = books.slice((page - 1) * booksPerPage, page * booksPerPage);

  return (
    <div className="w-full min-h-screen container mx-auto flex flex-col items-center p-6 pt-24 bg-zinc-100">
      <h1 className="text-4xl font-bold text-center mb-6">SHOP</h1>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {Array(9).fill(0).map((_, idx) => (
            <div
              key={idx}
              className="w-full h-80 bg-gray-200 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>
      ) : books.length === 0 ? (
        <p className="text-center text-gray-400">No books available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {currentBooks.map((book) => (
            <div
              key={book._id}
              className="flex flex-col items-center transform transition duration-300 hover:scale-105 pt-10 bg-white p-4 rounded-lg shadow"
            >
              <img
                loading="lazy"
                className="w-48 h-56 mb-4 object-cover rounded cursor-pointer transition-all hover:shadow-lg"
                src={book.image}
                alt={book.title}
                onClick={() => navigate(`/book/${book._id}`)}
                onError={(e) => (e.target.src = "/default-book.png")} // fallback if image fails
              />
              <h2 className="text-xl font-semibold text-center">{book.title}</h2>
              <p className="text-gray-600">{book.author}</p>

              {isAdmin && (
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => navigate(`/admin/edit-product/${book._id}`)}
                    className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {books.length > booksPerPage && (
        <div className="flex justify-center items-center space-x-6 mt-10">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="px-5 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 disabled:bg-slate-300"
            disabled={page === 1}
          >
            -
          </button>
          <span className="text-lg font-medium">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-5 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 disabled:bg-slate-300"
            disabled={page === totalPages}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
