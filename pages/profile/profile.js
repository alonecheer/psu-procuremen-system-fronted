import React from "react";
import { Layout, Descriptions, Badge } from "antd";

const { Content } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import { useDispatch, useSelector } from "react-redux";
import ProfileStyleWrapper from "./profile.style";
const profile = () => {
  // เรียกใช้ dispatch
  const dispatch = useDispatch();
  // เรียกใช้ค่าจากใน Store
  const user = useSelector((state) => state.user.user);
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
              <div className="container">
                <Descriptions title="ข้อมูลส่วนตัว" bordered>
                  <Descriptions.Item label="รหัสประจำตัว" span={3}>
                    {user.username}
                  </Descriptions.Item>
                  <Descriptions.Item label="ชื่อ" span={3}>
                    {user.firstname}
                  </Descriptions.Item>
                  <Descriptions.Item label="สกุล" span={3}>
                    {user.lastname}
                  </Descriptions.Item>
                  <Descriptions.Item label="รหัสบัตรประจำตัวประชาชน" span={3}>
                    {user.cid}
                  </Descriptions.Item>
                  <Descriptions.Item label="Status" span={3}>
                    <Badge status="processing" text="Running" />
                  </Descriptions.Item>
                  <Descriptions.Item label="E-mail" span={3}>
                    {user.email}
                  </Descriptions.Item>
                  <Descriptions.Item label=" แก้ไข E-mail" span={3}>
                   <input type="text" name="email"></input>
                  </Descriptions.Item>
                </Descriptions>
               
              </div>
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </ProfileStyleWrapper>
  );
};
export default profile;
