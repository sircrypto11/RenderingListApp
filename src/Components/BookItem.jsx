function BookItem({ book, deleteBook }) {
  return (
    <div className="flex justify-between items-center border-b p-4">

      <div>
        <h3 className="text-lg font-bold">
          {book.title}
        </h3>

        <p className="text-gray-500">
          By {book.author}
        </p>
      </div>  

      <button
        onClick={() => deleteBook(book.id)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Delete
      </button>

    </div>
  );
}

export default BookItem;