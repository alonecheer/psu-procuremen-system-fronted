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
  const goPage_history = (e) => {
    Router.push("/history/history");
  };
  const goPage_profile = (e) => {
    Router.push("/profile/profile");
  };
  const goPage_form002 = (e) => {
    Router.push("/form002page/form002_1");
  };
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
      <SiderStyleWrapper>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="/homepage/home"
            icon={<HomeOutlined />}
            style={{ marginTop: "64px" }}
          >
            <a className="text-a" onClick={goPage_home}>
              หน้าแรก
            </a>
          </Menu.Item>

          <Menu.Item key="2" icon={<PlusSquareOutlined />}>
            <a className="text-a" onClick={goPage_form001}>
              คำสั่งซื้อพัสดุแบบปกติ 001
            </a>
          </Menu.Item>
          <Menu.Item key="3" icon={<PlusSquareOutlined />}>
            <a className="text-a" onClick={goPage_form002}>
              คำสั่งซื้อพัสดุแบบเร่งด่วน 002
            </a>
          </Menu.Item>
          <Menu.Item key="4" icon={<EditOutlined />}>
            <a className="text-a" onClick={goPage_profile}>
              จัดการข้อมูลส่วนตัว
            </a>
          </Menu.Item>
          <Menu.Item key="5" icon={<OrderedListOutlined />}>
            <a className="text-a" onClick={goPage_history}>
              ประวัติทำรายการ
            </a>
          </Menu.Item>
          <Menu.Item key="6" icon={<LoginOutlined />}>
            ออกจากระบบ
          </Menu.Item>
        </Menu>
      </SiderStyleWrapper>
    </Sider>
  );
};

export default SiderComponent;
