import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import Form001_3StyleWrapper from "./form001_3.style";
const form001_3 = () => {
  return (
    <Form001_3StyleWrapper>
      <title>Form001_3</title>
      <Layout>
        <SiderComponent />
        <Layout>
        <HeaderComponent />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "100vh" }}
          ></div>
        </Content>
        <FooterComponent />
        </Layout>
      </Layout>
    </Form001_3StyleWrapper>
  );
};
export default form001_3;
