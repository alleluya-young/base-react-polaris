import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import zhTranslations from "@shopify/polaris/locales/zh-CN.json";
import { Global } from "@emotion/react";
import { normalize } from "polished";
import { conf, ConfigProvider } from "./core/config";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={zhTranslations}>
      <ConfigProvider value={{ config: conf() }}>
        <Global styles={normalize()} />
        <App />
      </ConfigProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
