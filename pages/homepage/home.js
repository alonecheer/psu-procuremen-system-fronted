import React from "react";
import Header from "../../src/components/header/Header.js";
import Footer from "../../src/components/footer/Footer.js";
import "../homepage/home.css";
const home = () => {
  return (
    <div>
      <title>Homepage</title>
      <Header />
      <div className="content-service">
        <div className="container-service">
          <div className="content-service-container">
            <h1>How It Works</h1>
            <div className="content-service-grid">
              <div className="content-service-grid-item">
                <a href="/form001page/form001_1">
                  <img src="/static/images/ph001.png"></img>
                  <h2>เพิ่มคำสั่งซื้อแบบปกติ 001</h2>
                  <p>
                    เพิ่มคำสั่งซื้อรายการพัสดุไม่เกิน 2 รายการ
                    <br />
                    เพิ่มคำสั่งซื้อรายการพัสดุมากกว่า 2 รายการ
                  </p>
                </a>
              </div>
              <div className="content-service-grid-item">
                <a href="#">
                  <img src="/static/images/ph002.png"></img>
                  <h2>เพิ่มคำสั่งซื้อแบบเร่งด่วน 002</h2>
                  <p>
                    เพิ่มคำสั่งซื้อรายการพัสดุไม่เกิน 2 รายการ
                    <br />
                    เพิ่มคำสั่งซื้อรายการพัสดุมากกว่า 2 รายการ
                  </p>
                </a>
              </div>
              <div className="content-service-grid-item">
                <a href="#">
                  <img src="/static/images/user-h2.png"></img>
                  <h2>จัดการข้อมูลส่วนตัว</h2>
                  <p>แก้ไขข้อมูลประวัติส่วนตัว</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default home;
