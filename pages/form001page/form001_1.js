import React from "react";
import Form001_1StyleWrapper from "./form001_1.style";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const form001_1 = () => {
  return (
    <Form001_1StyleWrapper>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width="300"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              style={{ marginTop: "50px" }}
            >
              เพิ่มคำสั่งซื้อแบบปกติ 001
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              เพิ่มคำสั่งซื้อแบบเร่งด่วน 002
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              จัดการข้อมูลส่วนตัว
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              ประวัติทำรายการ
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              ออกจากระบบ
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          >
            <p> PSU procuremen system</p>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Form001_1StyleWrapper>
  );
};
export default form001_1;
