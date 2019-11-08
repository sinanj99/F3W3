import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams
} from "react-router-dom";
import data from "./data/data.json";
import "./App.css";

function Welcome() {
  return (
    <Router>
      <Route exact path="/">
        <h1>Welcome</h1>
        <Link to="/all">See all users</Link>
      </Route>
      <Route exact path="/all">
        <All />
      </Route>
      <Route path="/details/:index">
        <Details />
      </Route>
    </Router>
  );
}

function All() {
  return (
    <div className="all-users">
      <h1>All Users</h1>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>
              <h2>Name</h2>
            </td>
            <td>
              <h2>Details</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          {Array.from(data.users).map((user, index) => (
            <tr key={index}>
              <td>
                <img src={user.picture.thumbnail} alt={user.name} />
              </td>
              <td>
                {user.first} {user.last}
              </td>
              <td>
                <Link to={`/details/${index}`}>details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Details() {
  let { index } = useParams();
  return (
    <div className="info">
      <div>
        <p>Name: {data.users[index].first}</p>
        <p>Phone: {data.users[index].phone}</p>
        <p>Email: {data.users[index].email}</p>
        <p>Gender: {data.users[index].gender}</p>
      </div>
      <div>
        <img src={data.users[index].picture.large} />
      </div>
    </div>
  );
}
export default Welcome;
