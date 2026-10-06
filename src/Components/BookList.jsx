import BookItem from "./BookItem";

function BookList({ books, deleteBook }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-bold mb-4">
        Books
      </h2>

      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          deleteBook={deleteBook}
        />
      ))}

    </div>
  );
}

export default BookList;