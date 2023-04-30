import { Layout, Col, Row, Card } from "antd";
import { useSelector, shallowEqual } from "react-redux";
import { useTranslation } from "react-i18next";

const { Header, Content, Footer } = Layout;

const DataView = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const { t } = useTranslation();

  return (
    <Layout className="site-layout">
      <Header className="header">
        <h1>{t("view.title")}</h1>
      </Header>
      <Content className="content">
        <h1>{t("view.header")}</h1>
        <Row gutter={[16, 24]}>
          {articles.map((article: IArticle) => (
            <Col span={6}>
              <Card title={article.name}>
                {Object.keys(article).map(
                  (key) =>
                    key !== "id" &&
                    key !== "name" && (
                      <p>
                        {t(`form.${key}`)}: {(article as any)[key]}
                      </p>
                    )
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
      <Footer className="text-center">Euvic 2023 - [GTv2]</Footer>
    </Layout>
  );
};

export default DataView;
