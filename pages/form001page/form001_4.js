import React, { useEffect, useState }  from "react";
import Router from "next/router";
import { Layout, Upload, message, Tag, Divider } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Content } = Layout;
const { Dragger } = Upload;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../../store/form001_1/form001_1Action";
import Form001_4StyleWrapper from "./form001_4.style";
const form001_3 = () => {
  // เรียกใช้ dispatch
  const dispatch = useDispatch();
  // เรียกใช้ค่าจากใน Store
  const username = useSelector((state) => state.user.user.username);

  //ดึงเลข order_id จาก store ที่ได้จาก getdata()
  const order_id = useSelector(
    (state) => state.form001_1.info_form001_1.order_id
  );

  useEffect(() => {
    // Get Api หาเลขใบรายการล่าสุด
    dispatch(getdata(username));
  }, []);
  // Submit buttom
  const submit = async () => {
    Router.push("/homepage/home");
  };
  // Upload file
  const propsupload = {
    name: "image",
    action: `http://localhost:3000/uploadfile001/single/${order_id}`,
    multiple: false,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Form001_4StyleWrapper>
      <title>Form001_3</title>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              <Divider orientation="left" style={{ marginBottom: "50px" }}>
                <Tag color="purple">ใบเสนอราคา</Tag>
              </Divider>

              <Dragger {...propsupload}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Dragger>
              <input
                style={{ marginTop: "20px" }}
                type="submit"
                value="Submit"
                onClick={() => submit()}
              ></input>
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </Form001_4StyleWrapper>
  );
};
export default form001_3;
