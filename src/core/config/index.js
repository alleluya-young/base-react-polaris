import { createContext, useContext } from "react";
import { parse } from "querystring";

const ConfigContext = createContext({});
export const ConfigProvider = ConfigContext.Provider;

export const useConfig = () => useContext(ConfigContext).config || {};

const getDevkitValue = (key) => {
  const meta = document.querySelector(`meta[name="devkit:${key}"]`);
  if (meta) {
    return meta.getAttribute("content");
  }
  return "";
};

export const conf = () => {
  const config = parse(getDevkitValue("config"), ",", "=", {
    decodeURIComponent: (v) => v,
  });
  return config;
};
