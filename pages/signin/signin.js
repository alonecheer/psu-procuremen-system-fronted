import React from "react";
import "../signin/signin.css";
const signin = () => {
  return (
    <div className="bg">
      <title>Sign in</title>
      <div className="loginbox">
        <img src="/static/images/user.png" className="avatar"></img>
        <h1>PSU PASSPORT</h1>
        <from>
          <p>Username</p>
          <input type="text" name="" placeholder="Enter Username"></input>
          <p>Password</p>
          <input type="password" name="" placeholder="Enter Password"></input>
          <input type="submit" name="" value="Login"></input>
        </from>
      </div>
    </div>
  );
};
export default signin;
