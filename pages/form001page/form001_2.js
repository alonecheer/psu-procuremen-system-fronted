import React from "react";
import { useForm } from "react-hook-form";
import { Layout, BackTop, notification, Button, Table } from "antd";
const { Content } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import Form001_2StyleWrapper from "./form001_2.style";
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
              <table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Job Title</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>James</td>
                    <td>Matman</td>
                    <td>Chief Sandwich Eater</td>
                  </tr>
                  <tr>
                    <td>The</td>
                    <td>Tick</td>
                    <td>Crimefighter Sorta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </Form001_2StyleWrapper>
  );
};
export default form001_2;
