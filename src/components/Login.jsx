import React from "react";
import { useContext } from "react";
import authContext from "../store/authStore";
import LoginForm from "./auth/LoginForm";
import { Navigate } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

function Login() {
  const ctx = useContext(authContext);

  const loginHandler = async (data) => {
    const url = "/api/users/auth/login";
    const res = await axios({
      method: "POST",
      url,
      data,
    });

    console.log(res);
  };

  // if (ctx.isloggedIn) {
  //   Navigate({
  //     to: "/home",
  //   });
  // }

  return (
    <div className="login_container">
      <div className="right">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="facebook"
        />
        <h2>With facebbok , Share and Stay in Contact with Your Friends.</h2>
      </div>
      <div className="left">
        <div className="login_card">
          <LoginForm onloginHandler={loginHandler} />
          <div className="spirator"></div>
          <button className="SignUp_toggle">Create New Account</button>
        </div>
        <p>
          <a href="/page" className="create_page">
            Créer une Page
          </a>
          pour une célébrité, une marque ou une entreprise.
        </p>
      </div>
    </div>
  );
}

export default Login;
