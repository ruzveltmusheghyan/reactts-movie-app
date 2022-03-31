import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/css/main.css";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("No root element");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
