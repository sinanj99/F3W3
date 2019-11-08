import React, { useState } from "react";
function EditBook({ bookStore }) {
  const [book, setBook] = useState({ title: "", info: "" });

  function handleChange(event) {
    book[event.target.id] = event.target.value;
    setBook({ ...book });
  }

  function handleSubmit(event) {
    event.preventDefault();
    bookStore.editBook(book);
  }
  return (
    <form>
      <h1>Edit book</h1>
      <input
        id="id"
        placeholder="id"
        onChange={event => {
          if (event.target.value > 0 && event.target.value < 5) {
            setBook({ ...bookStore.books[event.target.value - 1] });
          } else {
            setBook({ title: "not found", info: "not found" });
          }
        }}
      />
      <input
        id="title"
        placeholder="title"
        value={book.title}
        onChange={handleChange}
      />
      <input
        id="info"
        placeholder="info"
        value={book.info}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Edit</button>
      <br></br>
      {JSON.stringify(book)}
    </form>
  );
}
export default EditBook;
