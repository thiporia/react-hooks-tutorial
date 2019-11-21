import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./SassComponent.scss";
import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponent";

function App() {
  return (
    <StyledComponent />
    // <div className="SassComponent">
    //   <div className="box red" />
    //   <div className="box orange" />
    //   <div className="box yellow" />
    //   <div className="box green" />
    //   <div className="box blue" />
    //   <div className="box indigo" />
    //   <div className="box violet" />
    // </div>
  );
}

export default App;
