import React, { useState } from "react";
import { render } from "react-dom";

const App = () => {
  const [state, setState] = useState("CLICK ME");

  return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.querySelector("#root"));
