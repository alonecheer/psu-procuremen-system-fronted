import React, { useEffect } from "react";
import { Layout } from "antd";
const { Content } = Layout;
import SiderComponent from "../../src/components/sider/sider.js";
import HeaderComponent from "../../src/components/header/header.js";
import FooterComponent from "../../src/components/footer/footer.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "../../store/example/postAction";
import Example_reduxStyleWrapper from "./example-redux.style";
const example = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  console.log(posts);
  useEffect(() => {
    dispatch(fetchposts());
  }, []);
  return (
    <Example_reduxStyleWrapper>
      <title>Example Redux</title>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              {posts.map((data, index) => {
                return <h1 key={index}>{data}</h1>;
              })}
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </Example_reduxStyleWrapper>
  );
};
export default example;
