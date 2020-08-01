import styled from "styled-components";

const HeaderStyleWrapper = styled.div`
  a {
    color: #000;
  }
  .header {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    z-index: 3;
    width: 100%;
  }
  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }
  .header ul a {
    display: block;
    padding: 20px;
    border-right: 1px solid #aaa;
    text-decoration: none;
  }
  .header ul a:hover {
    background-color: #ddd;
  }
  .header .logo {
    float: left;
    display: block;
    font-size: 2em;
    padding: 10px 20px;
  }

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  .header .menu-icon {
    padding: 28px 20px;
    position: relative;
    float: right;
    cursor: pointer;
  }

  .header .menu-icon .nav-icon {
    background: #333;
    display: block;
    height: 2px;
    width: 18px;
    position: relative;
    transition: background 0.2s ease-out;
  }
  .header .menu-icon .nav-icon:before {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 5px;
    transition: all 0.2s ease-out;
  }
  .header .menu-icon .nav-icon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: -5px;
    transition: all 0.2s ease-out;
  }
  .header .menu-btn {
    display: none;
  }
  .header .menu-btn:checked ~ .menu {
    max-height: 240px;
  }
  .header .menu-btn:checked ~ .menu-icon .nav-icon {
    background: transparent;
  }
  .header .menu-btn:checked ~ .menu-icon .nav-icon:before {
    transform: rotate(-45deg);
    top: 0;
  }
  .header .menu-btn:checked ~ .menu-icon .nav-icon:after {
    transform: rotate(45deg);
    top: 0;
  }

  @media (min-width: 1025px) {
    .header li {
      float: left;
    }
    .header li a {
      padding: 20px 30px;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }
`;
export default HeaderStyleWrapper;
