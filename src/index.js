import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import zhTranslations from "@shopify/polaris/locales/zh-CN.json";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={zhTranslations}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
