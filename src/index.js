//CORE
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//REDUX
import { Provider } from "react-redux";
import { store } from "./store/store";
//CORE CSS
import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
