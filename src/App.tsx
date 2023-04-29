import React from "react";
import { Layout, Menu } from "antd";

import { MenuHeader, Router } from "./components/";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const { Header } = Layout;

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translation: {
        menu: {
          home: "Home",
          main: "Main",
          view: "View",
        },
        title: "Euvic",
        landing: {
          title: "Welcome to Euvic",
        },
      },
    },
    pl: {
      translation: {
        menu: {
          home: "Strona główna",
          main: "Główna",
          view: "Widok",
        },
        title: "Euvic",
        landing: {
          title: "Witaj w Euvic",
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuHeader />
      {/* <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header> */}
      <Router />
    </Layout>
  );
};

export default App;
