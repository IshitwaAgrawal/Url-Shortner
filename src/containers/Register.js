import React, { useState } from "react";
import InputElement from "../components/InputElement";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import * as routes from "../utils/routes";
import axios from "../utils/axios";
import * as calls from "../utils/endpoints";

const Register = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signup_handler = () => {
    const user_data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      username: username,
      password: password,
    };

    axios
      .post(calls.signup, user_data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register__main">
      <span className="welcome__text">Welcome!</span>
      <h4>Register to continue</h4>
      <div className="register__main__box">
        <InputElement
          heading="E-Mail"
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
        />
        <InputElement
          heading="First Name"
          placeholder="Enter your first name"
          value={first_name}
          setValue={setFirstName}
        />
        <InputElement
          heading="Last Name"
          placeholder="Enter your last name"
          value={last_name}
          setValue={setLastName}
        />
        <InputElement
          heading="Username"
          placeholder="Enter your username"
          value={username}
          setValue={setUsername}
        />
        <InputElement
          password
          heading="Password"
          placeholder="Enter your password"
          value={password}
          setValue={setPassword}
        />
        <div className="register__main__box__btn">
          <NavLink to={routes.login}>
            <Button text="Login" />
          </NavLink>
          <Button text="Register" callback={signup_handler} />
        </div>
      </div>
    </div>
  );
};

export default Register;
