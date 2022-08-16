import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import Reducer from "./reducers/Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(Reducer, composeWithDevTools(applyMiddleware()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
