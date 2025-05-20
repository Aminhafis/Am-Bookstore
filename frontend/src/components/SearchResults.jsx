import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get('query'); // make sure it's "query" not "q"
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      axios.get(`/api/book/search?q=${query}`)
        .then(res => {
          setResults(res.data.books);
          setFound(res.data.found);
          setLoading(false);

          if (!res.data.found) {
            toast.info('No matching books found. Showing related books.');
          }
        })
        .catch(err => {
          console.error(err);
          toast.error('Something went wrong while searching.');
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        {found ? `Search Results for "${query}"` : `No match for "${query}" — showing related books:`}
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map(book => (
            <li key={book._id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-bold">{book.title}</h3>
              <p className="text-gray-600">by {book.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
