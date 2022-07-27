import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "	#3b444b";
      showAlert("Dark Mode Enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  const toggleModeRed = () => {
    if (mode === "light") {
      setMode("danger");
      document.body.style.backgroundColor = "	#ffbaba";
      document.body.style.color = "white";
      showAlert("Red mode has been enabled", "success");
      // document.title = "TextUtils - Red Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggleModeRed={toggleModeRed}
        />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <Textform
              showAlert={showAlert}
              heading="Try TextUtils - Word & Character Counter with Case Convertion"
              mode={mode}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
