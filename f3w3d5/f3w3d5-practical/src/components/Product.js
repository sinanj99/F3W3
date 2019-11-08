import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Details from "./Details";
class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bookStore } = this.props;
    return (
      <div>
        <h1>Products View</h1>
        <ul>
          {bookStore.books.map(book => (
            <li key={book.id}>
              {book.title}
              <Link to={`/products/${book.id}`}>details</Link>
            </li>
          ))}
        </ul>
        <Route path={`/products/:id`}>
          <Details bookStore={bookStore} />
        </Route>
      </div>
    );
  }
}
export default Product;
