import React from "react";
import { Layout, Table } from "antd";
const { Content } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import HistoryStyleWrapper from "./history.style";
const columns = [
  {
    title: "Name (all screens)",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age (medium screen or bigger)",
    dataIndex: "age",
    key: "age",
    responsive: ["md"],
  },
  {
    title: "Address (large screen or bigger)",
    dataIndex: "address",
    key: "address",
    responsive: ["lg"],
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
];
const example = () => {
  return (
    <HistoryStyleWrapper>
      <title>History</title>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              <Table columns={columns} dataSource={data} />
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </HistoryStyleWrapper>
  );
};
export default example;
