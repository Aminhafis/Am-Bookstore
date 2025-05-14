import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ViewProduct = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const booksPerPage = 9;
  const navigate = useNavigate();

  // Example admin check from localStorage (adapt this if using context/auth)
  const isAdmin = localStorage.getItem("role") === "admin";

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`https://am-bookstore-mw9b.onrender.com/api/book/getData`);
      setBooks(response.data);
    } catch (error) {
      console.log("Error fetching Books:", error);
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
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      toast.success("Book deleted successfully");
      fetchBooks(); // Refresh list
    } catch (err) {
      toast.error("Failed to delete book");
    }
  };

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
            <div key={book._id} className="flex flex-col items-center transform transition duration-300 hover:scale-105 pt-10 bg-white p-4 rounded-lg shadow-lg">
              <img
                className="w-48 h-56 object-cover rounded-lg mb-4 cursor-pointer"
                src={book.image}
                alt={book.title}
                onClick={() => navigate(`/book/${book._id}`)}
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
      <div className="flex justify-center items-center space-x-6 mt-10">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-5 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 disabled:bg-slate-200"
          disabled={page === 1}
        >
          -
        </button>
        <span className="text-lg font-medium">{page} of {totalPages}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-5 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
          disabled={page === totalPages}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ViewProduct;
