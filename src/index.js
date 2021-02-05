import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/react";
import { normalize } from "polished";
import { conf, ConfigProvider } from "./core/config";

import { Routes } from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider value={{ config: conf() }}>
      <Global styles={normalize()} />
      <Routes />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
