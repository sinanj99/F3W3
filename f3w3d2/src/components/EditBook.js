import React from "react";
const EditBook = ({ book, setBook, edit }) => {
  function handleChange(event) {
    book[event.target.id] = event.target.value;
    setBook({ ...book });
  }
  function handleSubmit(event) {
    event.preventDefault();

    edit(book);
  }
  return (
    <form>
      <input
        onChange={handleChange}
        id="title"
        placeholder="new title"
        value={book.title}
      />
      <input
        onChange={handleChange}
        id="info"
        placeholder="new info"
        value={book.info}
      />
      <button onClick={handleSubmit}>edit</button>
      {JSON.stringify(book)}
    </form>
  );
};
export default EditBook;
