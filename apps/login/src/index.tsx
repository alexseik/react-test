import React from "react";
import ReactDOM from "react-dom/client";
import { ApiProvider } from "./context";
import App from "./App";
import "./tailwind.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
