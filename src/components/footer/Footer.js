import React from "react";
import FooterStyleWrapper from "./footer.style.js";
import { Layout } from "antd";
const { Footer } = Layout;
const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
};
export default FooterComponent;
