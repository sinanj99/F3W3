import React, { useState } from "react";
function DeleteBook({ bookFacade }) {
  const deleteBook = bookFacade.deleteBook;
  const [id, setId] = useState("");
  return (
    <form>
      <h1>Delete Book</h1>
      <input
        onChange={event => setId(event.target.value)}
        placeholder="id"
        value={id}
      />
      <button
        onClick={event => {
          event.preventDefault();
          setId("");
          deleteBook(id);
        }}
      >
        Delete Book
      </button>
    </form>
  );
}
export default DeleteBook;
