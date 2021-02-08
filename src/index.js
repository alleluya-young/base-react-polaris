import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/react";
import { normalize } from "polished";
import { conf, ConfigProvider } from "./core/config";

import { App } from "./template/App";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider value={{ config: conf() }}>
      <Global styles={normalize()} />
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
