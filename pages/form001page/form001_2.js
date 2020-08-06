import React, { useEffect } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { Layout, BackTop, notification, Button, Table } from "antd";
const { Content } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../../store/form001_1/form001_1Action";
import { saveform001_2 } from "../../store/form001_2/form001_2Action";
import Form001_2StyleWrapper from "./form001_2.style";
import Axios from "axios";
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

const form001_2 = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    console.log("data", data);

    /* Check Data Empty */
    let error = 0;
    for (const [key, value] of Object.entries(data)) {
      if (value != "") {
        //console.log(`มีข้อมูล ${key}: ${value}`);
      } else {
        error = error + 1;
        //console.log(`ไม่มีข้อมูล ${key}: ${value}`);
      }
    }
    // console.log(`${error}`);     /* Total Empty Data*/
    if (error > 0) {
      openNotificationWithIcon("warning");
    } else {
      openNotificationWithIcon("success");
      // Api Post บันทึกรายการ
      Axios.post(`http://localhost:3000/form001-2/insertform001-2`, data)
        .then((res) => {
          console.log("Success");
        })
        .catch((res) => {
          console.log("False");
        });
      // เก็บข้อมูลลงใน Redux
      dispatch(saveform001_2(data));
    }
  };
  // แจ้งเตือน
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
        Router.push("/form001page/form001_3");
        break;
    }
  };

  // เรียกใช้ dispatch
  const dispatch = useDispatch();
  // เรียกใช้ค่าจากใน Store
  const username = useSelector((state) => state.user.user.username);

  // ดึงเลข order_id จาก store ที่ได้จาก getdata()
  const order_id = useSelector(
    (state) => state.form001_1.info_form001_1.order_id
  );

  useEffect(() => {
    // Get Api หาเลขใบรายการล่าสุด
    dispatch(getdata(username));
  }, []);

  return (
    <Form001_2StyleWrapper>
      <title>Form001_2</title>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* ------------- ส่ง order_id บันทึกรายการ ------------- */}
                <input
                  type="number"
                  name="order_id"
                  hidden={true}
                  defaultValue={order_id}
                  ref={register}
                />
                <table>
                  <thead>
                    <tr>
                      <th>ลำดับ</th>
                      <th>รายการ</th>
                      <th>จำนวน</th>
                      <th>หน่วย</th>
                      <th>ราคา/หน่วย</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <input
                          ref={register}
                          type="text"
                          name="l_detail_1"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="number"
                          name="l_amount_1"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="text"
                          name="l_unit_1"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="number"
                          name="l_priceunit_1"
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input
                          ref={register}
                          type="text"
                          name="l_detail_2"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="number"
                          name="l_amount_2"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="text"
                          name="l_unit_2"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="number"
                          name="l_priceunit_2"
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input
                          ref={register}
                          type="text"
                          name="l_detail_3"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="number"
                          name="l_amount_3"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="text"
                          name="l_unit_3"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="number"
                          name="l_priceunit_3"
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <input
                          ref={register}
                          type="text"
                          name="l_detail_4"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="number"
                          name="l_amount_4"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="text"
                          name="l_unit_4"
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={register}
                          type="number"
                          name="l_priceunit_4"
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input
                  style={{ marginTop: "20px" }}
                  type="submit"
                  value="Submit"
                ></input>
              </form>
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </Form001_2StyleWrapper>
  );
};
export default form001_2;
