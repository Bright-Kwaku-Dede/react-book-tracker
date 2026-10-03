import { useState, useEffect } from "react";
import BookList from "./BookList";

function App() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [
      { title: "Dune", author: "Frank Herbert" },
      { title: "1984", author: "George Orwell" },
      { title: "Circe", author: "Madeline Miller" },
    ];
  });
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  function handleDelete(bookToDelete) {
    setBooks(books.filter((book) => book !== bookToDelete));
  }

  function handleAdd() {
    if (!newTitle.trim()) return;
    setBooks([...books, { title: newTitle, author: "Unknown" }]);
    setNewTitle("");
  }

  return (
    <div>
      <h1>My Books</h1>
      <BookList books={books} onDelete={handleDelete} />

      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New book title"
      />
      <button onClick={handleAdd}>Add Book</button>
    </div>
  );
}

export default App;