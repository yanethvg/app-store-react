import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// config redux
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
