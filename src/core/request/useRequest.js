import { useRequest as useRequestOrigin } from 'ahooks';
import { useConfig } from '../config';
import { useEffect, useRef } from 'react';
import { get, startsWith } from 'lodash';
import axios from 'axios';

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
    params => {
      const o = service.optionsMethod(params);
      if (!startsWith(o.url, 'http')) {
        o.url = urlPrefixRef.current + o.url;
      }
      return o;
    },
    {
      ...options,
      requestMethod: params => axios(params),
      manual: true,
    },
  );
  useEffect(() => {
    const prefix = config.SRV_MAIN;
    if (!prefix) {
      return;
    }
    let mainPrefix;
    if (prefix === '__PROD__') {
      mainPrefix = `${window.location.protocol}//${window.location.host}/api-shop-isw`;
    } else {
      mainPrefix = `${prefix}`;
    }
    urlPrefixRef.current = mainPrefix;

    if (!get(options, 'manual')) {
      run(get(options, 'defaultParams'));
    }
  }, [config]);

  useEffect(() => {
    return () => {
      cancel && cancel();
    };
  }, []);

  return [data?.data, run, loading, error];
};
