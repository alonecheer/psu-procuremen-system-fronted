import React from "react";
import "../signin/signin.css";
const signin = () => {
  return (
    <div className="background">
      <div class="box">
        <form autocomplete="off">
          <img src="static/images/psu_icon.png"></img>
          <p class="text-center">
            <b>Sign In</b>
          </p>
          <div class="input-container">
            <input type="text" placeholder="username" autocomplete="off" />
          </div>
          <div class="input-container">
            <input type="password" placeholder="password" autocomplete="off" />
          </div>
          <button type="button" class="btn">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
export default signin;
