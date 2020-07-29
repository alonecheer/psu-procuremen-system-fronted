import React from "react";
import "../signin/signin.css";
const signin = () => {
  return (
    <div className="">

   
    <div className="bg"></div> 
      <div class="box">
        <form>
          <span class="text-center">PSU PASSPORT</span>
          <div class="input-container">
            <input type="text" required="" />
            <label>Username</label>
          </div>
          <div class="input-container">
            <input type="mail" required="" />
            <label>Password</label>
          </div>
          <button type="button" class="btn">
            Signin
          </button>
        </form>
      </div>
    
    </div>
  );
};
export default signin;
