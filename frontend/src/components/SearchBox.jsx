// components/SearchBox.jsx
import React, { useState, useRef, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to a search result page or trigger filtering logic
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery('');
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <IoSearch className="h-6 w-6 text-gray-600 hover:text-black transition" />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search book or author..."
        className={`transition-all duration-300 ml-2 bg-transparent border-b border-gray-400 outline-none text-sm px-2 py-1 ${
          isOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'
        }`}
      />
    </form>
  );
}

export default SearchBox;
