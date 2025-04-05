import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  
    

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('price', price);
    formData.append('genre', genre);
    formData.append('description', description);
    formData.append('image', image); 

    try {

      const response = await axios.post('http://localhost:12000/api/book/postData', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        },
      });

      console.log(response.data);
      alert('Uploaded successfully!');
      // navigate('/viewProduct'); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto m-16 p-6 bg-stone-100">
      <h2 className="text-3xl font-semibold mb-6 pt-6">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="block w-full border p-2"
          />
        </div>

        <div>
          <label className="block">Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="block w-full border p-2"
          />
        </div>

        <div>
          <label className="block">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="block w-full border p-2"
          />
        </div>

        <div>
          <label className="block">Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            className="block w-full border p-2"
          />
        </div>

        <div>
          <label className="block">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full border p-2"
          />
        </div>
        
        <div>
          <label className="block">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full border p-2"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct