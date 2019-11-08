let URL = "http://localhost:4000/books";

//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function bookFacade() {
  //OBSERVE This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  function getBooks() {
    return fetch(URL).then(handleHttpErrors);
  }

  function addBook(book) {
    const data = book;
    const options = makeOptions("POST", data);
    return fetch(URL, options)
      .then(handleHttpErrors)
      .catch(err => console.log(err));
  }

  function deleteBook(id) {
    const options = makeOptions("DELETE");
    fetch(URL + "/" + id, options)
      .then(handleHttpErrors)
      .catch(err => console.log(err));
  }
  function editBook(book) {
    const options = makeOptions("PUT");
    fetch(URL + "/" + book.id, options)
      .then(handleHttpErrors)
      .catch(err => console.log(err));
  }

  return {
    getBooks,
    addBook,
    deleteBook,
    editBook
  };
}

export default bookFacade();
