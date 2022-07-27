import React, { useState } from "react";

export default function Textform(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    console.log("Changed " + text + " toUppercase");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Successively Converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    console.log("Changed " + text + " toLowercase");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Successively Converted to Lowercase", "success");
  };
  const handleCleClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "success");
  };
  const [text, setText] = useState("");

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };

  let frmStyle = {
    backgroundColor:
      props.mode === "dark"
        ? "#212529"
        : "#FDF6E4" && props.mode === "danger"
        ? "#ff5252"
        : "#FDF6E4",
    color:
      props.mode === "dark"
        ? "white"
        : "black" && props.mode === "danger"
        ? "white"
        : "black",
    fontWeight: "bolder",
  };
  return (
    <>
      <div
        className="container my-2"
        style={{
          color:
            props.mode === "dark"
              ? "white"
              : "black" && props.mode === "danger"
              ? "white"
              : "black",
        }}
      >
        <div className="mb-3">
          <h3 className="header">{props.heading}</h3>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={frmStyle}
            value={text}
            id="mybox"
            rows={15}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          style={frmStyle}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          style={frmStyle}
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2"
          style={frmStyle}
          onClick={handleCleClick}
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-2"
          style={frmStyle}
          onClick={handleCopy}
        >
          Copy text
        </button>
        {/* <button className="btn btn-primary mx-2"  onClick={toggleStyle}>{btnState}</button> */}
      </div>
      <div
        className="container my-2"
        style={{
          color:
            props.mode === "dark"
              ? "white"
              : "black" && props.mode === "danger"
              ? "white"
              : "black",
        }}
      >
        <h4 className="header">Your Text Summary:</h4>
        <p className="header">
          {
            text
              .trim()
              .split(" ")
              .filter(function(element) {
                return element !== "";
              }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>
        <p className="header">{0.008 * text.split(" ").length} Minutes Read!</p>
        <h4 className="header">Preview</h4>
        <p className="header">
          {text.length > 0 ? text : "Enter something above to Preview it"}
        </p>
      </div>
    </>
  );
}
