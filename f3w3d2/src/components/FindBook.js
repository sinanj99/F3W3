import React, { useState } from "react";
import ShowBook from "./ShowBook";

const FindBook = ({ find, delet, edit }) => {
  const [id, setId] = useState("");
  const [book, setBook] = useState({ id: "", title: "", info: "" });
  const [show, setShow] = useState(false);
  const [doesExist, setDoesExist] = useState(true);

  function onChange(event) {
    setId(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (typeof find(id) === "undefined") {
      setDoesExist(false);
      return;
    }
    setDoesExist(true);
    setShow(true);
    setBook(find(id));
    setId("");
  }
  return (
    <div>
      <h1>Find Book</h1>
      <form>
        <input onChange={onChange} value={id} placeholder="Enter book id" />
        <button onClick={handleSubmit}>Find book</button>
      </form>
      <ShowBook
        doesExist={doesExist}
        book={book}
        setBook={setBook}
        delet={delet}
        show={show}
        setShow={setShow}
        edit={edit}
      />
    </div>
  );
};
export default FindBook;
