import { Layout } from "antd";
import { useTranslation } from "react-i18next";

const { Content, Footer } = Layout;

const Landing = () => {
  const { t } = useTranslation();

  return (
    <Layout className="site-layout">
      <Content className="content text-center">
        <h2>{t("menu.main")}</h2>
        <p>{t("landing.mainDescription")}</p>
        <h2>{t("menu.view")}</h2>
        <p>{t("landing.viewDescription")}</p>
        <h2>Zmien jezyk / Change language</h2>
        <p>
          By zmienić język, skorzystaj z opcji w pasku nawigacji. To change
          language use language selector located in navigation bar.
        </p>
      </Content>
      <Footer className="text-center">Euvic 2023 - [GTv2]</Footer>
    </Layout>
  );
};

export default Landing;
