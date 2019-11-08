import React from "react";
import { useParams } from "react-router-dom";
function Details({ bookStore }) {
  const { id } = useParams();
  const books = bookStore.books;
  const book = books[id - 1];
  return (
    <div>
      <p>
        Detailed info for the title: <b>{book.title}</b>
      </p>
      <br />
      <p>ID: {book.id}</p>
      <p>Info: {book.info}</p>
    </div>
  );
}
export default Details;
