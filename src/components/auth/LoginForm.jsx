import React from "react";
import { useState } from "react";

function LoginForm(props) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const emailHandler = (e) => setEmailInput(e.target.value);
  const passwordHandler = (e) => setPasswordInput(e.target.value);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    props.onloginHandler({
      email: emailInput,
      password: passwordInput,
    });
  };

  return (
    <form className="login_form" onSubmit={loginSubmitHandler}>
      <div className="control">
        <input
          type="text"
          placeholder="Email Or Number Phone"
          onChange={emailHandler}
          value={emailInput}
        />
      </div>
      <div className="control">
        <input
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
          value={passwordInput}
        />
      </div>
      <div className="control">
        <input type="submit" value="Logged In" />
      </div>
      <a className="pass_forg_link" href="/pass">
        Forggot Password?
      </a>
    </form>
  );
}

export default LoginForm;
