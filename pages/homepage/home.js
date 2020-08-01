import React from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import HomeStyleWrapper from "./home.style";
const home = () => {
  return (
    <HomeStyleWrapper>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              content
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </HomeStyleWrapper>
  );
};
export default home;
