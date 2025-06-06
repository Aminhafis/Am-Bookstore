import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const BookById = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();


  //Add items to  cart 
  const addToCart = async (book) => {
    let userId = localStorage.getItem('Id')

    if (!userId) {
      toast.error("Please login to add books to the cart.");
      return;
    }

    try {
      await axios.post('https://am-bookstore-mw9b.onrender.com/api/cart', {
        userId,
        bookId: book._id,
        title: book.title,
        price: book.price,
        quantity:1,
      })
      toast.success(`${book.title} added to cart!`);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  }

  useEffect(() => {
    const fetchBook = async () => {
      try {
        let response = await axios.get(`https://am-bookstore-mw9b.onrender.com/api/book/getDataById/${id}`);
        console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book data:', error);
        toast.error('Failed to load book data.');
      }
    };
    fetchBook();
  }, [id]);

  if (!book) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <div className='w-auto h-screen bg-zinc-300 p-10'>
      <div className='flex flex-col items-center'>
        <img
          className="w-48 h-56 object-cover rounded-lg shadow-lg mb-4"
          src={book.image}
          alt={book.title}
        />
        <h2 className="text-5xl text-center font-semibold hover:text-gray-600">{book.title}</h2>
        <p className="text-gray-600 mt-2 hover:text-slate-800">{book.author}</p>
        <p className="text-green-800 mt-2 font-bold hover:text-slate-600">Rs {book.price}</p>
        <p className='text-gray-700 text-xl p-4'>{book.description}</p>
          <button
                onClick={() => addToCart(book)}
                className="mt-4 px-4 py-2 bg-slate-700 text-white rounded-md w-52 hover:bg-slate-900"
              >
                Add to Cart
              </button>
      </div>
    </div>
  );
};

export default BookById;
