// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
// App.js or routing setup
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BrowseBooks from './components/browseBooks';
import BookDetails from './components/bookDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/books/details/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
