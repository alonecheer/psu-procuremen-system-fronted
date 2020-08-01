import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header>
      <title>Header</title>
      <div className="container">
        <div className="nav-gid">
          {/*-------------------------- Name web --------------------------*/}
          <div className="name-web">
            <a href="/">
              <div className="link">
                <h1>PSU procuremen system</h1>
              </div>
            </a>
          </div>

          {/*-------------------------- Menu --------------------------*/}
          <div className="fr">
            <ul className="menu">
              <div className="dropdown">
                <li>
                  <a href="#">เพิ่มคำสั่งซื้อ</a>
                </li>
                <div className="dropdown-content">
                  <a href="/form001page/form001_1">พัสดุแบบปกติ 001</a>
                  <a href="#">พัสดุแบบเร่งด่วน 002</a>
                </div>
              </div>
              <div className="dropdown">
                <li>
                  <a href="#">เครื่องมือ</a>
                </li>
                <div className="dropdown-content">
                  <a href="#">ประวัติการทำรายการ</a>
                  <a href="#">ข้อมูลส่วนตัว</a>
                </div>
              </div>

              <li>
                <a href="#">ออกจากระบบ</a>
              </li>
            </ul>
          </div>
        </div>
        {/*-------------------------- Hamburger --------------------------*/}
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu2">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
