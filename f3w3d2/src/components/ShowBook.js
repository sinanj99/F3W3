import React from "react";
import EditBook from "./EditBook";
const ShowBook = ({ doesExist, book, setBook, delet, show, setShow, edit }) => {
  if (doesExist === false) {
    return <h4>The requested book does not exist</h4>;
  } else if (show === false) return <h4>Enter id for details</h4>;
  else {
    return (
      <div>
        <p>id: {book.id}</p>
        <p>title: {book.title}</p>
        <p>info: {book.info}</p>
        <button
          onClick={() => {
            delet(book.id);
            setShow(false);
          }}
        >
          Delete
        </button>
        <EditBook book={book} setBook={setBook} edit={edit} />
      </div>
    );
  }
};
export default ShowBook;
