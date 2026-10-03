function BookList({ books, onDelete }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.title}>
          {book.title} by {book.author}
          <button onClick={() => onDelete(book)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;