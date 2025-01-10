// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="p-6 text-center">
    <h1 className="text-3xl font-bold">Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/" className="text-blue-500">Go back to Home</Link>
  </div>
);

export default NotFound;