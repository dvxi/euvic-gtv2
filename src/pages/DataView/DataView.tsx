import { Layout, Col, Row, Card } from "antd";
import { useSelector, shallowEqual } from "react-redux";
import { useTranslation } from "react-i18next";

const { Content, Footer } = Layout;

const DataView = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const { t } = useTranslation();

  return (
    <Layout className="site-layout">
      <Content className="content">
        <h1>{t("view.header")}</h1>
        <Row gutter={[16, 24]}>
          {articles.map((article: IArticle) => (
            <Col span={6}>
              <Card title={article.name}>
                <p>
                  {t("form.age")}: {article.age}
                </p>
                <p>
                  {t("form.birthdate")}: {article.birthdate}
                </p>
                <p>{article.description}</p>
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
