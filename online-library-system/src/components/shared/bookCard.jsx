// import React from 'react';
// import { Link } from 'react-router-dom';

// const BookCard = ({ book }) => (
//   <div className="border p-4 rounded shadow">
//     <h2 className="font-bold text-lg">{book.title}</h2>
//     <p>Author: {book.author}</p>
//     <Link to={`/book/${book.id}`} className="text-blue-500">View Details</Link>
//   </div>
// );

// export default BookCard;
// src/components/shared/BookCard.jsx
import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>
      <p className="text-gray-500 text-sm">Category: {book.category}</p>
    </div>
  );
};

export default BookCard;
