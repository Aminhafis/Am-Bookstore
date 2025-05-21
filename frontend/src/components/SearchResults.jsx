import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get('query'); // make sure it's "query"
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      axios
        .get(`https://am-bookstore-mw9b.onrender.com/api/book/search?q=${query}`)
        .then((res) => {
          setResults(res.data.books);
          setFound(res.data.found);
          setLoading(false);

          if (!res.data.found) {
            toast.info('No matching books found. Showing related books.');
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error('Something went wrong while searching.');
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {found
          ? `Search Results for "${query}"`
          : `No match for "${query}" — showing related books:`}
      </h2>

      {loading ? (
        <div className="text-center text-lg text-gray-600">Loading...</div>
      ) : results.length === 0 ? (
        <div className="text-center text-red-500">No books available.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((book) => (
            <Link
              to={`/book/${book._id}`}
              key={book._id}
              className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">by {book.author}</p>
                <p className="text-green-700 font-bold mt-2">Rs {book.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
