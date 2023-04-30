import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en/common.json";
import pl from "./translations/pl/common.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en,
    pl,
  },
});

export default i18n;
