import { useRequest as useRequestOrigin } from "ahooks";
import { useConfig } from "../config";
import { useEffect, useRef } from "react";
import { get, isObject, startsWith, isString } from "lodash";

/**
 * 重写 service 中的url
 * @param service
 * @param options
 * @returns {[*, *, *, *]}
 */
export const useRequest = (service, options) => {
  const config = useConfig();
  const urlPrefixRef = useRef();
  const { data, error, loading, run, cancel } = useRequestOrigin(
    () => {
      if (isObject(service) && service.url) {
        if (!startsWith(service.url, "http")) {
          service.url = urlPrefixRef.current + service.url;
        }
      } else if (isString(service)) {
        if (!startsWith(service, "http")) {
          service = urlPrefixRef.current + service;
        }
      }
      return service;
    },
    {
      ...options,
      manual: true,
    }
  );
  useEffect(() => {
    const prefix = config.SRV_MAIN;
    if (!prefix) {
      return;
    }
    let mainPrefix;
    if (prefix === "__PROD__") {
      mainPrefix = `${window.location.protocol}//${window.location.host}/api-shop-isw`;
    } else {
      mainPrefix = `${prefix}/api-shop-isw`;
    }
    urlPrefixRef.current = mainPrefix;

    if (!get(options, "manual")) {
      run();
    }
  }, [config]);

  useEffect(() => {
    return () => {
      cancel && cancel();
    };
  }, []);

  return [data, run, loading, error];
};
