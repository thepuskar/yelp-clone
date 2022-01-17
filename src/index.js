import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bulma/css/bulma.css";
import { BrowserRouter } from "react-router-dom";

//access to store from app ,auth stuff
import {Provider} from "react-redux";
import store from "./auth/store";


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  
  </React.StrictMode>,
  document.getElementById("root")
);
