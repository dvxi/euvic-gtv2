import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducer from "./store/reducer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store: Store = configureStore({
  reducer,
  middleware: [thunk],
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
