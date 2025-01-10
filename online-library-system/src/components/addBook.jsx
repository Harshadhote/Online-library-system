// src/components/AddBook.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/bg.jpg';

const AddBook = () => {
  const [formData, setFormData] = useState({ title: '', author: '', description: '', rating: '', category: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...formData, id: Date.now() }));
    navigate(`/books/${formData.category.toLowerCase()}`);
  };

  return (
    <div
    className="min-h-screen bg-cover bg-center text-gray-950 flex justify-center items-center"
    style={{
       backgroundImage:`url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Full viewport height
    padding: '20px',

     }} //  path 
  >
    <form onSubmit={handleSubmit} className="p-6">
      <h1 className="text-2xl font-bold">Add a New Book</h1>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="border p-2 my-2 w-full"
      />
      <input
        type="text"
        placeholder="Author"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        className="border p-2 my-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="border p-2 my-2 w-full"
      />
      <input
        type="text"
        placeholder="Rating"
        value={formData.rating}
        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
        className="border p-2 my-2 w-full"
      />
      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="border p-2 my-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Book</button>
    </form>
    </div>
  );
};

export default AddBook;



