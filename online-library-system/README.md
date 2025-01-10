


# Online Library System
## Project gitHub link
https://github.com/Harshadhote/Online-library-system

The Online Library System is a React-based application that allows users to browse, add, and view details about books in a virtual library. This project is designed to showcase dynamic routing, Redux state management, and responsive design.

## Features

1. **Browse Books**:
   - Displays books by category (Fiction, Non-Fiction, Sci-Fi).
   - Search functionality to filter books by title or author.
   - Displays all books by default when navigating to the Browse Books page.

2. **View Book Details**:
   - Displays detailed information about a selected book, including title, author, description, and rating.
   - Includes a dummy story summary for each book.
   - "Back to Browse" button to navigate back to the Browse Books page.

3. **Add Book**:
   - A form for adding new books to the library with fields for title, author, description, rating, and category.
   - Uses Redux to manage the state of the books list.
   - Redirects to the Browse Books page after successful submission.
   - Includes form validation to ensure all fields are correctly filled out.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For implementing dynamic routing.
- **Redux**: For state management.
- **Tailwind CSS**: For styling the application.
- **JavaScript**: For logic and functionality.

## Installation/Run

 cd C:\ONLINE-LIBRARY-SYSTEM\online-library-system

 Start the development server:
   ```bash
   npm run dev
   ```



## Project Structure

- `src/components`: Contains React components for the application, including `BrowseBooks`, `AddBook`, and `BookDetails`.
- `src/redux`: Contains the Redux slice for managing book state.
- `src/styles`: Contains custom CSS or Tailwind configuration.

## Usage

1. **Browse Books**:
   - Navigate to `/books` to view all books or `/books/<category>` to view books by category.
   - Use the search bar to filter books by title or author.

2. **View Book Details**:
   - Click on the "View Details" button for any book to see its detailed information.

3. **Add Book**:
   - Navigate to `/add-book` to add a new book to the library.
   - Fill out all fields in the form and click "Add Book".

cd C:\ONLINE-LIBRARY-SYSTEM\online-library-system
 
PS C:\ONLINE-LIBRARY-SYSTEM\online-library-system> npm run dev   



## Author

Developed By
Harsha Dhote.

