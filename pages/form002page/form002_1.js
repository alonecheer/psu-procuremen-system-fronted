import React, { useState } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { Layout, BackTop, notification, Button } from "antd";
const { Content } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import Form002_1StyleWrapper from "./form002_1.style";
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
const example = () => {
  /* Form */
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    console.log("data", data);
    let error = 0;
    for (const [key, value] of Object.entries(data)) {
      if (value != "" || value === false) {
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
        Router.push("/homepage/home");
        break;
    }
  };
  return (
    <Form002_1StyleWrapper>
      <title>Form002_1</title>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              <h2>เพิ่มคำสั่งซื้อแบบเร่งด่วน 002</h2>
              <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* ----------------------------------- Title Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label className="title-text">บันทึกข้อความ</label>
                    </div>
                    <div className="col-75">
                      <input type="hidden"></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ส่วนงาน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx1"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ที่</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx2"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">วันที่</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx3"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เรื่อง</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx4"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เรียน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx5"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ด้วย หน่วยงาน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx5"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">สังกัด</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx7"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname"></label>
                    </div>
                    <div className="col-75">
                      <label htmlFor="lname">
                        มีความจำเป็นต้องดำเนินการจัดซื้อจัดจ้างไปก่อนแล้ว
                        จึงไม่สามารถดำเนินการขั้นตอนปกติตามระเบียบกระทรวงการคลังว่าด้วยการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ
                        พ.ศ. 2560 กำหนดได้
                      </label>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">จำนวน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx8"
                        ref={register}
                        placeholder="(รายการ)"
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">วงเงิน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx9"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <input type="checkbox" name="checkbox1" ref={register} />
                    </div>
                    <div className="col-75">
                      <label htmlFor="lname">
                        ได้รับการผ่อนผันตามหนังสือคณะกรรมการวินิจฉัยปัญหาการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ
                        ที่ กค (กวจ) 0405.2/ว119 ลงวันที่ 9 มีนาคม 2561
                        ซึ่งเป็นรายการเกี่ยวกับค่าใช้จ่ายตาม ตาราง 1
                      </label>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ลำดับที่</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx10"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <input type="checkbox" name="checkbox2" ref={register} />
                    </div>
                    <div className="col-75">
                      <label htmlFor="lname">
                        มีความจำเป็นเร่งด่วนเกิดเหตุการณ์ไม่อาจคาดหมายได้
                        ตามมาตรา 56 วรรคหนึ่ง (1) (ค)
                        หรือกรณีมีความจำเป็นต้องใช้พัสดุุนั้นโดยฉุกเฉิน มาตรา 56
                        วรรคหนึ่ง (2)(ง)
                      </label>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เนื่องจาก</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx11"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Title Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label className="title-text">โดยเบิกจ่ายให้แก่</label>
                    </div>
                    <div className="col-75">
                      <input type="hidden"></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">1 )</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx11"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เป็นเงิน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx13"
                        ref={register}
                        placeholder="(บาท)"
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">2 )</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx14"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เป็นเงิน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx15"
                        ref={register}
                        placeholder="(บาท)"
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">3 )</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx16"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เป็นเงิน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx17"
                        ref={register}
                        placeholder="(บาท)"
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">โดยเบิกจ่ายจากแหล่งเงิน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx18"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">แผนงาน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx19"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ผลผลิต/งาน</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx20"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ประเภท</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx21"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Title Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label className="title-text">กรรมการตรวจรับพัสสดุ</label>
                    </div>
                    <div className="col-75">
                      <input type="hidden"></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25"></div>
                    <div className="col-75">
                      <label htmlFor="lname">
                        กรณีวงเงินไม่เกิน 1 แสนบาท
                        จะแต่งตั้งบุคคลใดบุคคลหนึ่งเป็นผู้ตรวจรับพัสดุก็ได้
                        แต่ถ้าเกิน 1 แสนบาท
                        ต้องแต่งตั้งคณะกรรมการตรวจรับพัสดุอย่างน้อย 3 คน
                      </label>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">1 )</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx22"
                        ref={register}
                        placeholder="(ประธานกรรมการ/ผู้ตรวจรับพัสดุ)"
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">2 )</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx23"
                        ref={register}
                        placeholder="(กรรมการ)"
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">3 )</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx24"
                        ref={register}
                        placeholder="(กรรมการ)"
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25"></div>
                    <div className="col-75">
                      <label htmlFor="lname">
                        จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติการดำเนินการจัดซื้อจัดจ้าง
                        ตามรายละเอียดดังกล่าวข้างต้น
                      </label>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">(ลงชื่อ)</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx25"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">ผู้ขอ</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx26"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Text ----------------------------- */}
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="lname">เบอร์ติดต่อ</label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="xxxx27"
                        ref={register}
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  {/* ----------------------------------- Button ----------------------------- */}
                  <div className="row">
                    <input
                      style={{ marginTop: "20px" }}
                      type="submit"
                      value="Submit"
                    ></input>
                  </div>
                  {/* ----------------------------------- End Form ----------------------------- */}
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
    </Form002_1StyleWrapper>
  );
};
export default example;
