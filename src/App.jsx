import { useState } from "react";
import BookList from "./Components/BookList";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "",
      author: "",
    },
    
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function addBook(e) {
    e.preventDefault();

    if (title === "" || author === "") {
      alert("Please fill in all fields");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: title,
      author: author,
    };

    setBooks([...books, newBook]);

    setTitle("");
    setAuthor("");
  }

  function deleteBook(id) {
    setBooks(
      books.filter((book) => book.id !== id)
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-8">
          My Book List
        </h1>

        {/* Add Book */}
        <form
          onSubmit={addBook}
          className="bg-white p-6 rounded-lg shadow mb-8"
        >

          <h2 className="text-xl font-bold mb-4">
            Add a Book
          </h2>

          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Add Book
          </button>

        </form>

        {/* Book List */}
        <BookList
          books={books}
          deleteBook={deleteBook}
        />

      </div>

    </div>
  );
}

export default App;