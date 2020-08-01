import React from "react";
import SiderStyleWrapper from "./sider.style.js";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const SiderComponent = () => {
  return (
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
  );
};

export default SiderComponent;
