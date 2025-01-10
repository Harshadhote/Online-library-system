// src/components/BrowseBooks.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from './shared/bookCard';
import backgroundImage from '../assets/images/bg.jpg';




const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction" },
  { id: 2, title: "Sapiens", author: "Yuval Noah Harari", category: "Non-Fiction" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction" },
  { id: 4, title: "Brief History of Time", author: "Stephen Hawking", category: "Sci-fi" },
];

const BrowseBooks = () => {
  const { category } = useParams(); // Dynamic category from URL
  
  const books = useSelector((state) => state.books.books); // Access the books from Redux state
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  console.log("Category from URL:", category); // Log the category

  // Filter books by category or search query
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category.toLowerCase() === category.toLowerCase() : true;
    const matchesSearch = searchQuery
      ? book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });




  return (
    <div className="min-h-screen bg-cover bg-center text-gray-950 flex justify-center items-center"
        style={{
           backgroundImage:`url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Full viewport height
        padding: '20px',
    
         }} >
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Books</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-500 p-2 rounded mb-4 w-full"
      />

      {/* Filtered Books */}
      <div>
        {filteredBooks.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBooks.map((book) => (
              <li
                key={book.id}
                className="border p-4 rounded shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <p className="text-gray-950">{book.author}</p>
                <p className="text-gray-950 text-sm">Category: {book.category}</p>
                <button
  onClick={() => navigate(`/books/details/${book.id}`)}
  className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
>
  View Details
</button>

              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-500 text-center">No books found!</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default BrowseBooks;


// // Dummy data for books
// const booksData = [
//   { id: 1, title: "Book One", author: "Author One", category: "Fiction" },
//   { id: 2, title: "Book Two", author: "Author Two", category: "Non-Fiction" },
//   { id: 3, title: "Book Three", author: "Author Three", category: "Fiction" },
//   { id: 4, title: "Book Four", author: "Author Four", category: "Science" },
// ];

// const BrowseBooks = () => {
//   const { category } = useParams();
//   const books = useSelector((state) => state.books.list);
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredBooks = books.filter(
//     (book) =>
//       book.category.toLowerCase() === category &&
//       (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         book.author.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">{category} Books</h1>
//       <input
//         type="text"
//         placeholder="Search by title or author"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="border p-2 my-4 w-full"
//       />
//       <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredBooks.map((book) => (
//           <BookCard key={book.id} book={book} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrowseBooks;
