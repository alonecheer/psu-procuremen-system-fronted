import styled from "styled-components";

const Form001_4StyleWrapper = styled.div`
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .site-layout-background {
    background: #fff;
  }

  /* input Sybmit*/
  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    width: 25%;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }
  @media screen and (max-width: 600px) {
    input[type="submit"] {
      float: none;
      width: 100%;
      margin-top: 0;
    }
  }
`;

export default Form001_4StyleWrapper;
