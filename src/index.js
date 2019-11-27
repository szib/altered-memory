/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";

import { StateProvider } from "./store/store";

import { BrowserRouter as Router } from "react-router-dom";

import "normalize.css";
import "./style.css";

import App from "./App/App";

import * as serviceWorker from "./serviceWorker";
import DefaultHelmet from "./App/Helmet";

ReactDOM.render(
  <Router>
    <DefaultHelmet />
    <StateProvider>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
