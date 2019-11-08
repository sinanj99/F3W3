import React from "react";
import { useRouteMatch, Link, Route } from "react-router-dom";
import Info from "./Info";

const Products = ({ books, find }) => {
  let match = useRouteMatch();
  return (
    <div>
      <h1>{books().length} books available</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Info</td>
          </tr>
        </thead>
        <tbody>
          {books().map(book => (
            <tr key={book.id}>
              <td>
                <Link to={`${match.url}/${book.id}`}>{book.id}</Link>
              </td>
              <td>{book.title}</td>
              <td>{book.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Route path={`${match.path}/:id`}>
        <Info find={find} />
      </Route>
    </div>
  );
};
export default Products;
