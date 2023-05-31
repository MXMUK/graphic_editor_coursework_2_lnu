import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { StyleOptionsProvider } from "./context/StyleOptionsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyleOptionsProvider>
      <App />
    </StyleOptionsProvider>
  </React.StrictMode>
);