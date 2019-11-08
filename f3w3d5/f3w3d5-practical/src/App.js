import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Product from "./components/Product";
import Company from "./components/Company";
import Header from "./components/Header";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import DeleteBook from "./components/DeleteBook";
import EditBook from "./components/EditBook";

function App({ bookStore, bookFacade }) {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/products"
            render={() => <Product bookStore={bookStore} />}
          />
          <Route path="/company" render={() => <Company />} />
          <Route path="/add-book">
            <AddBook bookFacade={bookFacade} />
          </Route>
          <Route path="/delete-book">
            <DeleteBook bookFacade={bookFacade} />
          </Route>
          <Route path="/edit-book">
            <EditBook bookStore={bookStore} />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
function NoMatch() {
  return <h1>Requested resource does not exist</h1>;
}

export default App;
