import React, { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchuser } from "../../store/user/get_userAction";
import SigninStyleWrapper from "./signin.style";
const signin = () => {
  // เรียกใช้ dispatch
  const dispatch = useDispatch();

  // Set user & pass
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Sign in api
  const signin = async () => {
    const Signin = await axios
      .post(`http://localhost:3000/auth/login`, {
        username: username,
        password: password,
      })
      .then((Signin) => {
        sessionStorage.setItem("access_token", Signin.data.access_token);
        dispatch(fetchuser(username));
        Router.push("/homepage/home");
      })
      .catch((Signin) => {
        alert(`Password or user is incorrect`);
      });
  };
  return (
    <SigninStyleWrapper>
      <div className="bg">
        <title>Sign in</title>
        <div className="loginbox">
          <img src="/static/images/user.png" className="avatar"></img>
          <h1>PSU PASSPORT</h1>
          <from>
            <p>Username</p>
            <input
              type="text"
              name=""
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <p>Password</p>
            <input
              type="password"
              name=""
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              type="submit"
              name=""
              value="Login"
              onClick={() => signin()}
            ></input>
          </from>
        </div>
      </div>
    </SigninStyleWrapper>
  );
};
export default signin;
