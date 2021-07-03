import React, { useState } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import './styles/style.css';

export default function App() {
  return (
    <HashRouter>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

render(<App />, document.querySelector("#root"));
