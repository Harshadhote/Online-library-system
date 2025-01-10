// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/bg.avif';

const Home = () => (
  <div className="p-6" 
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Full viewport height
    padding: '20px',
  }}
  >
    <h1 className="text-3xl font-bold text-white">Welcome to the Online Library</h1>
    <p className="my-4 text-white">Explore our collection of books across various categories.</p>
    <div className="grid grid-cols-3 gap-4">
      {['Fiction', 'Non-Fiction', 'Sci-Fi'].map((category) => (
        <Link
          key={category}
          to={`/books/${category.toLowerCase()}`}
          className=" text-white font-bold text-center p-4 rounded " style={{ background: 'linear-gradient(to right,grey,orange, grey)' }}
        >
          {category}
        </Link>
      ))}
    </div>
  </div>
);

export default Home;