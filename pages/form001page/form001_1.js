import React from "react";
import { useForm } from "react-hook-form";
import { Layout, BackTop, notification, Button } from "antd";
const { Content } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import Form001_1StyleWrapper from "./form001_1.style";
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};
const form001_1 = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    console.log("data", data);
    let error = 0;
    for (const [key, value] of Object.entries(data)) {
      if (value != "") {
        console.log(`Have value ${key}: ${value}`);
      } else {
        error = error + 1;
        console.log(`Don't have value ${key}: ${value}`);
      }
    }
    console.log(`${error}`);
    if (error > 0) {
      openNotificationWithIcon("warning");
    } else {
      openNotificationWithIcon("success");
    }
  };
  const openNotificationWithIcon = (type) => {
    switch (type) {
      case "warning":
        notification[type]({
          message: "บันทึกรายการไม่สำเร็จ",
          description: "โปรดกรอกข้อมูลให้ครบถ้วน",
        });
        break;
      case "success":
        notification[type]({
          message: "บันทึกรายการสำเร็จ",
          description: "",
        });
        break;
    }
  };
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
                <form onSubmit={handleSubmit(onSubmit)}>
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
                      <input
                        type="text"
                        name="sid"
                        ref={register}
                        placeholder="60xxxxxxx"
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เอกสารที่ มอ.696/</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_location"
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ลงวันที่</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_date"
                        placeholder=""
                        ref={register}
                      ></input>
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
                      <input
                        type="text"
                        name="o_purpose"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ชื่อโครงการ (ถ้ามี)</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_projectname"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">วันที่ต้องใช้พัสดุ</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_require"
                        placeholder=""
                        ref={register}
                      ></input>
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
                      <input
                        type="number"
                        name="o_specific"
                        defaultValue="0"
                        ref={register}
                      ></input>
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
                      <input
                        type="number"
                        name="o_appointment"
                        defaultValue="0"
                        ref={register}
                      ></input>
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
                      <input
                        type="number"
                        name="o_results"
                        defaultValue="0"
                        ref={register}
                      ></input>
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
                      <input
                        type="text"
                        name="o_committee1"
                        placeholder=""
                        ref={register}
                      ></input>
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
                      <input
                        type="text"
                        name="o_committee2"
                        placeholder=""
                        ref={register}
                      ></input>
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
                      <input
                        type="text"
                        name="o_committee3"
                        placeholder=""
                        ref={register}
                      ></input>
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
                      <input
                        type="text"
                        name="o_committee4"
                        placeholder=""
                        ref={register}
                      ></input>
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
                      <input
                        type="text"
                        name="o_committee5"
                        placeholder=""
                        ref={register}
                      ></input>
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
                      <input
                        type="text"
                        name="o_committee6"
                        placeholder=""
                        ref={register}
                      ></input>
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
                      <input
                        type="text"
                        name="o_gvm_sub"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เงินรายได้ ปี</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_income"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เงินรายได้สะสม ปี</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_aml_income"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ทิศทาง</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_direction"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">นโยบาย</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_policy"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ผลงาน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_works"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">งาน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_task"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">หมวดรายจ่าย</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_expense_cg"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">หมวดย่อย</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_sub_cg"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ชื่อรายการ</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="o_list_n"
                        placeholder=""
                        ref={register}
                      ></input>
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
                      <input
                        type="text"
                        name="o_other_m"
                        placeholder=""
                        ref={register}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <input
                      style={{ marginTop: "20px" }}
                      type="submit"
                      value="Submit"
                    ></input>
                  </div>
                  {/* ----------------------------------- Option ----------------------------- */}
                  {/* <div className="row">
                    <div className="col-25">
                      <label htmlFor="country">Country</label>
                    </div>
                    <div className="col-75">
                      <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                      </select>
                    </div>
                  </div> */}
                  {/* ----------------------------------- Text Area ----------------------------- */}
                  {/* <div className="row">
                    <div className="col-25">
                      <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="col-75">
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
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </Form001_1StyleWrapper>
  );
};
export default form001_1;
