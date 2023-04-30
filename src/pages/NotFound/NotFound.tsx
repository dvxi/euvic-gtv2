import { Layout } from "antd";

import { useTranslation } from "react-i18next";
const { Header, Content, Footer } = Layout;

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Layout className="site-layout">
      <Header className="header">
        <h1>{t("notFound.title")}</h1>
      </Header>
      <Content className="content">
        <h1>{t("notFound.header")}</h1>
      </Content>
      <Footer className="text-center">Euvic 2023 - [GTv2]</Footer>
    </Layout>
  );
};

export default NotFound;
