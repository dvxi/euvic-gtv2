import { Layout } from "antd";
import { useTranslation } from "react-i18next";

const { Header, Content, Footer } = Layout;

const Landing = () => {
  const { t } = useTranslation();

  return (
    <Layout className="site-layout">
      <Header className="header">
        <h1>{t("title")}</h1>
      </Header>
      <Content className="content text-center">
        <h2>{t("main.title")}</h2>
        <p>
          Aby skorzystać z platformy przejdz na jedna z wyroznionych w menu
          stron. Na stronie "Panel uzytkownika" znajdziesz narzedzia potrzebne
          do edycji danych.
        </p>
        <h2>{t("view.title")}</h2>
        <p>
          Aby przegladac swoje dane skorzystaj z zakładki "Przegladarka danych".
          Znajdziesz tam pelne opisy uzytkownikow.
        </p>
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
