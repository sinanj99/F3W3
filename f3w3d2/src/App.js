import React, { useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import FindBook from "./components/FindBook";
import Products from "./components/Products";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products
              books={bookFactory.getBooks}
              find={bookFactory.findBook}
            />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/find-book">
            <FindBook
              find={bookFactory.findBook}
              delet={bookFactory.deleteBook}
              edit={bookFactory.editBook}
            />
          </Route>
          <Route path="/add-book">
            <AddBook addBook={bookFactory.addBook} />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
const Header = () => {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/add-book">
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/company">
          Company
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/find-book">
          Find Book
        </NavLink>
      </li>
    </ul>
  );
};
const Home = () => {
  return <div>Home</div>;
};
const Company = () => {
  return <div>Company</div>;
};
const NoMatch = () => {
  return <div>Error 404</div>;
};

export default App;
