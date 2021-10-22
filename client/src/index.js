import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { UserComponent } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<UserComponent />,
    document.getElementById('root1')
  );