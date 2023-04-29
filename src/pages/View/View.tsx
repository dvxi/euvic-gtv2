import { Layout, Col, Row, Divider, Card } from "antd";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

const { Header, Content, Footer } = Layout;

const View = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  return (
    <Layout className="site-layout">
      <Header
        style={{
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1>View</h1>
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
          <h1>View Page</h1>
          <Row gutter={[16, 24]}>
            {articles.map((article: IArticle) => (
              <Col span={8}>
                <Card title={article.name}>
                  <p>Age: {article.age}</p>
                  <p>Birthdate: {article.birthdate}</p>
                  <p>{article.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Euvic 2023 - [GTv2]</Footer>
    </Layout>
  );
};

export default View;
