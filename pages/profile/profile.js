import React from "react";
import { Layout, Descriptions, Badge } from "antd";

const { Content } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import ProfileStyleWrapper from "./profile.style";
const profile = () => {
  return (
    <ProfileStyleWrapper>
      <title>Profile</title>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              <Descriptions title="ข้อมูลส่วนตัว" bordered>
                <Descriptions.Item label="รหัสประจำตัว">
                  6035512021
                </Descriptions.Item>
                <Descriptions.Item label="ชื่อ">เจตนิพัทธ์</Descriptions.Item>
                <Descriptions.Item label="สกุล">
                  ตันเกียรติพงัน
                </Descriptions.Item>
                <Descriptions.Item label="รหัสบัตรประจำตัวประชาชน">
                  1849901350698
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                  <Badge status="processing" text="Running" span={2} />
                </Descriptions.Item>
              </Descriptions>
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </ProfileStyleWrapper>
  );
};
export default profile;
