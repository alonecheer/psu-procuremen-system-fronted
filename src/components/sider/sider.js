import React from "react";
import Router from "next/router";
import SiderStyleWrapper from "./sider.style.js";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  PlusSquareOutlined,
  EditOutlined,
  OrderedListOutlined,
  LoginOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const SiderComponent = () => {
  const goPage_form001 = (e) => {
    Router.push("/form001page/form001_1");
  };
  const goPage_home = (e) => {
    Router.push("/homepage/home");
  };
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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          style={{ marginTop: "50px" }}
        >
          <a
            style={{
              color: "rgba(255, 255, 255, 0.65)",
              backgroundColor: "transparent",
              textDecoration: "none",
            }}
            className="text-menu"
            onClick={goPage_home}
          >
            หน้าแรก
          </a>
        </Menu.Item>
        <Menu.Item key="2" icon={<PlusSquareOutlined />}>
          <a
            style={{
              color: "rgba(255, 255, 255, 0.65)",
              backgroundColor: "transparent",
              textDecoration: "none",
            }}
            className="text-menu"
            onClick={goPage_form001}
          >
            คำสั่งซื้อพัสดุแบบปกติ 001
          </a>
        </Menu.Item>
        <Menu.Item key="3" icon={<PlusSquareOutlined />}>
          เพิ่มคำสั่งซื้อแบบเร่งด่วน 002
        </Menu.Item>
        <Menu.Item key="4" icon={<EditOutlined />}>
          จัดการข้อมูลส่วนตัว
        </Menu.Item>
        <Menu.Item key="5" icon={<OrderedListOutlined />}>
          ประวัติทำรายการ
        </Menu.Item>
        <Menu.Item key="6" icon={<LoginOutlined />}>
          ออกจากระบบ
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderComponent;
