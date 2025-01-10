// src/components/BookDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate();

  // Select the book by ID from the Redux store
  const book = useSelector((state) => 
    state.books.find((b) => b.id === parseInt(id))
  );

  if (!book) return <p>Book not found</p>; // If no book is found with the given ID

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p className="text-lg">Author: {book.author}</p>
      <p className="my-4">{book.description || "No description available"}</p>
      <p className="my-4">Rating: {book.rating || "Not rated"}</p>

       {/* Dummy Story Summary */}
       <div className="mt-4">
        <h2 className="text-lg font-semibold">Story Summary:</h2>
        <p>{book.storySummary}</p>
      </div>

      <button
             onClick={() => window.history.back()}  // Back to Browse Books
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        Back to Browse>
      </button>
    </div>
  );
};

export default BookDetails;



// const BookDetails = () => {
//   const { id } = useParams();

//   // Debugging
//   console.log("Book ID:", id);

//   const book = booksData.find((b) => b.id.toString() === id);

//   if (!book) {
//     <div className="p-5 text-center">
//       <p className="text-red-500 text-xl font-semibold">Book not found!</p>
//     </div>
//   }

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold">{book.title}</h1>
//       <p className="text-lg text-gray-700"><strong>Author:</strong> {book.author}</p>
//       <p className="text-lg text-gray-700"><strong>Category:</strong> {book.category}</p>
//       <p className="text-gray-700 mt-4">{book.description}</p>
//       <button
//   onClick={() => navigate(`/books/details/${book.id}`)}
//   className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
// >
//   View Details
// </button>

//     </div>
//   );
// };

// export default BookDetails;








// const BookDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const book = useSelector((state) => state.books.list.find((b) => b.id === parseInt(id, 10)));

//   if (!book) return <p>Book not found</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">{book.title}</h1>
//       <p className="text-lg">Author: {book.author}</p>
//       <p className="my-4">{book.description}</p>
//       <p>Rating: {book.rating}</p>
//       <button onClick={() => navigate(-1)} className="bg-blue-500 text-white p-2 rounded">Back to Browse</button>
//     </div>
//   );
// };

// export default BookDetails;