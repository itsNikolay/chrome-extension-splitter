import React from "react";
import { render } from "react-dom";
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import './styles/style.css';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}

render(<App />, document.querySelector("#root"));
