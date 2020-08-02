import React from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { Layout, BackTop, notification, Button } from "antd";
const { Content } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import Form002_1StyleWrapper from "./form002_1.style";
const example = () => {
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
            ></div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </Form002_1StyleWrapper>
  );
};
export default example;
