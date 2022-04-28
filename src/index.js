import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthPorvider } from "./store/authStore";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthPorvider>
        <App />
      </AuthPorvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
