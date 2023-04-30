import React, { useState, useCallback } from "react";
import { Layout, Table, Space, Button, Select } from "antd";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { AddArticle } from "../../components";
import {
  addArticle,
  removeArticle,
  editArticle,
} from "../../store/actionCreators";
import { Dispatch } from "redux";
import Column from "antd/es/table/Column";
import { useTranslation } from "react-i18next";

const { Content, Footer } = Layout;

const Main = () => {
  const [editedArtice, setEditedArticle] = useState<IArticle | null>(null);
  const [pageSize, setPageSize] = useState<number>(10);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const hasSelected = selectedRowKeys.length > 0;
  const { t } = useTranslation();

  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  const changeArticle = useCallback(
    (article: IArticle) => dispatch(editArticle(article)),
    [dispatch]
  );

  const deleteArticle = useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch]
  );

  const handleDelete = (article: IArticle) => {
    deleteArticle(article);
    setSelectedRowKeys([]);
  };

  const deleteAllArticles = () => {
    articles.forEach((article) => {
      deleteArticle(article);
    });
    setSelectedRowKeys([]);
  };

  const deleteGroup = () => {
    selectedRowKeys.forEach(
      (key) => {
        deleteArticle(
          articles.find((article) => article.id === key) as IArticle
        );
      },
      [selectedRowKeys, articles]
    );
    setSelectedRowKeys([]);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Layout className="site-layout">
      <Content className="content">
        <h1>{t("main.header")}</h1>
        <Button danger onClick={deleteGroup} disabled={!hasSelected}>
          {t("button.delete")}
        </Button>
        <span>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
        <Table
          dataSource={articles}
          pagination={{ pageSize: pageSize }}
          rowSelection={{ type: "checkbox", ...rowSelection }}
          rowKey={(record) => record.id}
        >
          <Column title={t("main.table.name")} dataIndex="name" key="name" />
          <Column title={t("main.table.age")} dataIndex="age" key="age" />
          <Column
            title={t("main.table.birthdate")}
            dataIndex="birthdate"
            key="birthdate"
          />
          <Column
            title={t("main.table.description")}
            dataIndex="description"
            key="description"
            ellipsis={true}
          />
          <Column
            title={t("main.table.action")}
            key="action"
            render={(val, record: IArticle, id) => (
              <Space size="middle">
                <Button onClick={(e) => setEditedArticle(articles[id])}>
                  {t("button.edit")}
                </Button>
                <Button danger onClick={(e) => handleDelete(articles[id])}>
                  {t("button.delete")}
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
        <Button danger type="primary" onClick={deleteAllArticles}>
          {t("button.deleteAll")}
        </Button>
        <h1>{t("main.addArticle")}</h1>
        <AddArticle
          saveArticle={saveArticle}
          changeArticle={changeArticle}
          editedArtice={editedArtice}
        />
      </Content>
      <Footer className="text-center">Euvic 2023 - [GTv2]</Footer>
    </Layout>
  );
};

export default Main;
