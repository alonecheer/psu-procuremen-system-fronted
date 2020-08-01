import styled from "styled-components";

const SigninStyleWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext");
  .container {
    width: 500px;
    height: 100%;
    overflow-y: auto;
    z-index: 10;
    position: relative;
  }

  .bg {
    background-image: url("/static/images/bg.jpg");
    background-position: center;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
  }
  .loginbox {
    width: 320px;
    height: 420px;
    background: #000;
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 70px 30px;
  }

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    top: -70px;
    left: calc(40% - 40px);
  }

  h1 {
    margin: 0px 0px 10px 0px;
    padding: 0;
    text-align: center;
    font-size: 22px;
  }

  .loginbox p {
    margin: 0px 0px 10px 0px;
    padding: 0;
    font-weight: bold;
  }

  .loginbox input {
    width: 100%;
    margin-bottom: 20px;
  }

  .loginbox input[type="text"] {
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
  }

  .loginbox input[type="submit"] {
    border: none;
    outline: none;
    height: 40px;
    background: #fb2525;
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
  }

  .loginbox input[type="submit"]:hover {
    cursor: pointer;
    background: #ffc107;
    color: #000;
  }

  input[type="password"] {
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
    margin-bottom: 50px;
  }
`;
export default SigninStyleWrapper;
