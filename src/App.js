import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  useEffect(() => {
    async function checkIfUserLoggedIn() {
      const url = "/api/users/auth/isLoggedIn";
      const response = await axios(url);
      console.log(response);
    }
    try {
      checkIfUserLoggedIn();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
