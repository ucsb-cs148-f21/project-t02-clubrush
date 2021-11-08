import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { UserComponent } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(<UserComponent />,
//   document.getElementById('root1')
// );
// reportWebVitals();