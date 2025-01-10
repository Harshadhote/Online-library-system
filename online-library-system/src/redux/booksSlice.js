// src/redux/bookSlice.js
import { createSlice } from '@reduxjs/toolkit';
// import AddBook from '../components/addBook';

const initialState = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      description: "A classic novel set in the Jazz Age...",
      rating: "4.5/5",
      storySummary: "The Great Gatsby is the story of Jay Gatsby, a wealthy but mysterious man, and his obsession with the beautiful Daisy Buchanan."
    },
    {
      id: 2,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      description: "A history of humankind from the Stone Age to the modern day...",
      rating: "4.7/5",
      storySummary: "Sapiens chronicles the history of humanity, from early humans to the rise of modern civilizations and technological advancements."
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      description: "A powerful story about racial injustice in the American South...",
      rating: "5/5",
      storySummary: "Set in the 1930s, the novel follows Scout Finch as her father, Atticus Finch, defends a black man falsely accused of raping a white woman."
    },
    {
      id: 4,
      title: "Brief History of Time",
      author: "Stephen Hawking",
      category: "Sci-fi",
      description: "A groundbreaking book on cosmology, physics, and the universe...",
      rating: "4.3/5",
      storySummary: "Stephen Hawking takes us through complex scientific concepts like black holes, the Big Bang theory, and the nature of time in a simplified and thought-provoking manner."
    }
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
  },
});

export const { addBook} = bookSlice.actions;
export default bookSlice.reducer;
