import React, { useState } from "react";
import { Prompt } from "react-router-dom";
function AddBook({ bookFacade }) {
  let [isBlocking, setIsBlocking] = useState(false);
  const [book, setBook] = useState({ title: "", info: "" });

  function handleChange(event) {
    setIsBlocking(event.target.value.length > 0);
    book[event.target.id] = event.target.value;
    setBook({ ...book });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setIsBlocking(false);
    bookFacade.addBook(book);
  }
  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <input type="text" id="title" placeholder="title" />
        <br />
        <input type="text" id="info" placeholder="info" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
export default AddBook;
