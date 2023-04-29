import { Layout, theme } from "antd";
import { useTranslation } from "react-i18next";

const { Header, Content, Footer } = Layout;

const Landing = () => {
  const { t } = useTranslation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="site-layout">
      <Header
        style={{
          background: colorBgContainer,
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1>{t("title")}</h1>
      </Header>
      <Content style={{ margin: "16px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: "#fff",
            borderRadius: "16px",
          }}
        >
          <h1>{t("landing.title")}</h1>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Euvic 2023 - [GTv2]</Footer>
    </Layout>
  );
};

export default Landing;
