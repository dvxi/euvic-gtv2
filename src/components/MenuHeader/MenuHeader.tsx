import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Radio, Select } from "antd";
import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { Layout } from "antd";

const { Sider } = Layout;

const MenuHeader = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e: any) => {
    i18next.changeLanguage(e);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div style={{ height: 32, margin: 16, color: "#fff" }}>
        <h1>Euvic</h1>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["0"]}
        mode="inline"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Menu.Item key="0" icon={<UserOutlined />}>
          <Link to="/">{t("menu.home")}</Link>
        </Menu.Item>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/main">{t("menu.main")}</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
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
    </Sider>
  );
};

export default MenuHeader;
