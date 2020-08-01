import React from "react";
import HeaderStyleWrapper from "./header.style.js";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderStyleWrapper>
    <header className="header">
      <a href="/" className="logo">
        PSU procuremen system
      </a>
      <input className="menu_btn" type="checkbox" id="menu-btn"></input>
      <label className="menu-icon" htmlFor="menu-btn"></label>
      <span className="nav-icon"></span>
      <ul className="menu">
        <li>
          <a href="#">พัสดุแบบปกติ 001</a>
        </li>
        <li>
          <a href="#">พัสดุแบบเร่งด่วน 002</a>
        </li>
        <li>
          <a href="#">ประวัติการทำรายการ</a>
        </li>
        <li>
          <a href="#">ข้อมูลส่วนตัว</a>
        </li>
        <li>
          <a href="#">ออกจากระบบ</a>
        </li>
      </ul>
      <div>sdfdsf</div>
    </header>
    </HeaderStyleWrapper>
  );
};

export default Header;
