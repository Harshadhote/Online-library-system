// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className=" p-4 text-white font-bold" style={{ background: 'linear-gradient(to right,grey,orange, grey)' }}>
    <ul className="flex justify-between
    items-center">
      <li className="flex items-center"
      ><Link to="/" className="hover:text-blue-300">Home </Link></li>
      <li className="flex items-center"><Link to="/books/fiction"className="hover:text-blue-300">Browse Books</Link></li>
      <li className="flex items-center"><Link to="/add-book" className="hover:text-blue-300">Add Book</Link></li>
    </ul>
  </nav>
);
export default Navbar;