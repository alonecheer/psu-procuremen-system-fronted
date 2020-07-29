import React from "react";
import "../signin/signin.css";
const signin = () => {
  return <div>
    <div className="signin-container">
      <div className="signin-container-item">
        <div className="signin-title">
          <h2>PSU | PASSPORT</h2>
        </div>
        <div className="signin-info">
          <span>Username :</span>
          <input type="text" name="username" placeholder="6035512021"></input>
          <span>Password :</span>
          <input type="password" name="password"></input>
        </div>
        <div className="signin-submit">
          <button>Singin</button>
        </div>
      </div>
    </div>
    </div>;
};
export default signin;
