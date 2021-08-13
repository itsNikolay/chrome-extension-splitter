import React from "react";
import { render } from "react-dom";
import Routes from "./components/Routes";
import './styles/style.css';

const App = () => <Routes />

render(<App />, document.querySelector("#root"));
