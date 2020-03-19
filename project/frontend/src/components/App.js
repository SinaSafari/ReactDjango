import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
