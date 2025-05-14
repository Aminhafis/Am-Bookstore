import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditProduct() {
  const { id } = useParams(); // Book ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    genre: '',
    description: '',
    quantity: '',
    image: ''
  });

  const [imageFile, setImageFile] = useState(null); // For new image upload

  // ✅ MOVE handleDelete INSIDE the component
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
        await axios.delete(`https://am-bookstore-mw9b.onrender.com/api/book/deleteDataById/${id}`, {
            headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      toast.success("Book deleted successfully");
      navigate("/viewProduct");
    } catch (error) {
      console.error("Error deleting book", error);
      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://am-bookstore-mw9b.onrender.com/api/book/getDataById/${id}`);
        setFormData(res.data);
      } catch (error) {
        console.error("Error fetching book data", error);
        toast.error("Failed to load book data.");
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedForm = new FormData();
    updatedForm.append('title', formData.title);
    updatedForm.append('author', formData.author);
    updatedForm.append('price', formData.price);
    updatedForm.append('genre', formData.genre);
    updatedForm.append('description', formData.description);
    updatedForm.append('quantity', formData.quantity);

    if (imageFile) {
      updatedForm.append('image', imageFile);
    } else {
      updatedForm.append('image', formData.image); // Keep the old image URL
    }

    try {
      await axios.put(
        `https://am-bookstore-mw9b.onrender.com/api/book/updateBooks/${id}`,
        updatedForm,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      toast.success("Book updated successfully");
      navigate('/viewProduct');
    } catch (error) {
      console.error("Error updating book", error);
      toast.error("Update failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 mt-10 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full border p-2" required />
        <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="w-full border p-2" required />
        <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full border p-2" required />
        <input name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" className="w-full border p-2" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full border p-2" />
        <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Quantity" className="w-full border p-2" min={1} required />

        <div>
          <label className="block mb-1">Change Image (optional):</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="block w-full" />
          {formData.image && !imageFile && (
            <img src={`https://am-bookstore-mw9b.onrender.com/images/${formData.image}`} alt="Current" className="w-32 h-40 mt-4 object-cover rounded" />
          )}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Update Book
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Delete Book
        </button>

      </form>
    </div>
  );
}

export default EditProduct;
