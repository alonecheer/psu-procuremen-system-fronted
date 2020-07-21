import React from "react";
import Router from "next/router";
import Signin from "./signin/signin";
import "../public/static/style/index.css";
const index = () => {
  return (
    <div>
      <Signin />
    </div>
  );
};
export default index;
