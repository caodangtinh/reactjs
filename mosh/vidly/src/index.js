import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movie from "./components/movieComponent";

ReactDOM.render(<Movie />, document.getElementById("root"));
registerServiceWorker();
