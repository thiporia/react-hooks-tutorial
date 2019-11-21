import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

function App() {
  return (
    <div className="App">
      <Counter />
      <Info />
      <Average />
    </div>
  );
}

export default App;
