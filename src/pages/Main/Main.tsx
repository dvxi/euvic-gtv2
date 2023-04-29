import React, { useState } from "react";
import { Layout, Table, Space, Button, Select } from "antd";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { Article, AddArticle } from "../../components";
import { addArticle, removeArticle } from "../../store/actionCreators";
import { Dispatch } from "redux";
import Column from "antd/es/table/Column";

const { Header, Content, Footer } = Layout;

const Main = () => {
  const [editedArtice, setEditedArticle] = useState<IArticle | null>(null);
  const [pageSize, setPageSize] = useState<number>(1);
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
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
        <h1>Main</h1>
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
          <h1>Main Page</h1>
          {/* {articles.map((article: IArticle) => (
            <Article
              key={article.id}
              article={article}
              removeArticle={removeArticle}
            />
          ))} */}

          <Table dataSource={articles} pagination={{ pageSize: pageSize }}>
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Birthdate" dataIndex="birthdate" key="birthdate" />
            <Column
              title="Description"
              dataIndex="description"
              key="description"
            />
            <Column
              title="Action"
              key="action"
              render={(val, record: IArticle, id) => (
                <Space size="middle">
                  <Button onClick={(e) => setEditedArticle(articles[id])}>
                    Edit
                  </Button>
                  <Button onClick={(element) => removeArticle(articles[id])}>
                    Delete
                  </Button>
                </Space>
              )}
            />
          </Table>
          <Select
            defaultValue="10"
            onChange={(e) => setPageSize(Number(e))}
            options={[
              {
                value: 10,
                label: 10,
              },
              {
                value: 20,
                label: 20,
              },
              {
                value: 50,
                label: 50,
              },
            ]}
          />
          <h1>Add Article</h1>
          <AddArticle saveArticle={saveArticle} editedArtice={editedArtice} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Euvic 2023 - [GTv2]</Footer>
    </Layout>
  );
};

export default Main;
