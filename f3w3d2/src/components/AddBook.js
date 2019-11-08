import React, { useState } from "react";
import { Prompt } from "react-router-dom";

const AddBook = ({ addBook }) => {
  let [isBlocking, setIsBlocking] = useState(false);

  const [book, setBook] = useState({ id: "", title: "", info: "" });

  function onChange(event) {
    setIsBlocking(event.target.value.length > 0);
    book[event.target.id] = event.target.value;
    setBook({ ...book });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setIsBlocking(false);
    addBook(book);
  }
  return (
    <form onChange={onChange}>
      <Prompt
        when={isBlocking}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />
      <h1>Add book</h1>
      <input id="title" placeholder="title" />
      <br />
      <input id="info" placeholder="info" />
      <br />
      <button onClick={handleSubmit}>Save</button>
      {JSON.stringify(book)}
    </form>
  );
};
export default AddBook;
