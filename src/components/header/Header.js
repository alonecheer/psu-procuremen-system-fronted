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
                  <a href="#">พัสดุแบบปกติ 001</a>
                  <a href="#">พัสดุแบบเร่งด่วน 002</a>
                </div>
              </div>
              <li>
                <a href="#">จัดการข้อมูลส่วนตัว</a>
              </li>
              <li>
                <a href="#">ออกจากระบบ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
