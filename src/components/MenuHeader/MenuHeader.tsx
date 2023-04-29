import { Link } from "react-router-dom";
import { Menu, Select } from "antd";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { Layout } from "antd";

const { Header } = Layout;

const MenuHeader = () => {
  const { t } = useTranslation();

  const handleChange = (e: any) => {
    i18next.changeLanguage(e);
  };

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">{t("menu.home")}</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/main">{t("menu.main")}</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/about">{t("menu.view")}</Link>
        </Menu.Item>
      </Menu>
      <Select
        defaultValue="en"
        onChange={(e) => handleChange(e)}
        options={[
          {
            value: "en",
            label: "English",
          },
          {
            value: "pl",
            label: "Polski",
          },
        ]}
      />
    </Header>
  );
};

export default MenuHeader;
