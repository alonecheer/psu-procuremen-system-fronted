import React from "react";

import { Layout } from "antd";
const { Content } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import Form001_1StyleWrapper from "./form001_1.style";
const form001_1 = () => {
  return (
    <Form001_1StyleWrapper>
      <title>Form001_1</title>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              <h2>เพิ่มคำสั่งซื้อแบบปกติ 001</h2>
              <p>
                แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต
                กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
              </p>
              <div className="container">
                <form>
                  {/* ----------------------------------- Title Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label className="title-text">1.รายละเอียด</label>
                    </div>
                    <div className="col-75">
                      <input type="hidden"></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เอกสารของ</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder="60xxxxxxx"></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เอกสารที่ มอ.696/</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ลงวันที่</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">
                        ด้วยมหาวิทยาลัยการคอมพิวเตอร์มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ชื่อโครงการ (ถ้ามี)</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">วันที่ต้องใช้พัสดุ</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Title Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label className="title-text">
                        2.รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="hidden"></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">
                        รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน
                        (ประทับตรามหาวิทยาลัยพร้อมผู้มีอำนาจลงนาม) (จำนวนแผ่น)
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">
                        บันทึกการแต่งตั้งคณะกรรมการกำหนดคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง
                        (จำนวนแผ่น)
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">
                        บันทึกรายงานผลการจัดทำคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง
                        (จำนวนแผ่น)
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Title Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label className="title-text">3.คณะกรรมการ</label>
                    </div>
                    <div className="col-75">
                      <input type="hidden"></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">
                        คณะกรรมการพิจารณาผล (ประธานกรรมการ)
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">
                        คณะกรรมการพิจารณาผล (คณะกรรมการ)
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">
                        คณะกรรมการพิจารณาผล (คณะกรรมการ)
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">
                        คณะกรรมการตรวจรับพัสดุ (ประธานกรรมการ)
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">
                        คณะกรรมการตรวจรับพัสดุ (คณะกรรมการ)
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">
                        คณะกรรมการตรวจรับพัสดุ (คณะกรรมการ)
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Title Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label className="title-text">4.แหล่งเงิน</label>
                    </div>
                    <div className="col-75">
                      <input type="hidden"></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เงินอุดหนุนจากรัฐบาล ปี</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เงินรายได้ ปี</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เงินรายได้สะสม ปี</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ทิศทาง</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">นโยบาย</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ผลงาน</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">งาน</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">หมวดรายจ่าย</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">หมวดย่อย</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ชื่อรายการ</label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">
                        เงินอื่นๆโปรดระบุ (ตามที่แนบมาพร้อมนี้)
                      </label>
                    </div>
                    <div className="col-75">
                      <input type="text" placeholder=""></input>
                    </div>
                  </div>
                  <div class="row">
                    <input
                      style={{ marginTop: "20px" }}
                      type="submit"
                      value="Submit"
                    ></input>
                  </div>
                  {/* ----------------------------------- Option ----------------------------- */}
                  {/* <div class="row">
                    <div class="col-25">
                      <label htmlFor="country">Country</label>
                    </div>
                    <div class="col-75">
                      <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                      </select>
                    </div>
                  </div> */}
                  {/* ----------------------------------- Text Area ----------------------------- */}
                  {/* <div class="row">
                    <div class="col-25">
                      <label htmlFor="subject">Subject</label>
                    </div>
                    <div class="col-75">
                      <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write something.."
                        style={{ height: "200px" }}
                      ></textarea>
                    </div>
                  </div>
                   */}
                  {/* ----------------------------------- 1 ----------------------------- */}
                </form>
              </div>
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </Form001_1StyleWrapper>
  );
};
export default form001_1;
