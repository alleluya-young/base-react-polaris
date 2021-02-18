import { createMetaStateUse, metaUpdateKV } from '../core/store';
import { geMarketing, getTranslatePageByYn } from '../clients';
import { useConn, useObservable, useStore } from '@reactorx/core';
import { get, isEmpty } from 'lodash';
import { useRequest } from '../core/request';
import { useEffect } from 'react';

export const useMarketingMeta = createMetaStateUse(geMarketing);

export const useLanguageMeta = () => {
  const market = useMarketingMeta();

  const key = `meta::${getTranslatePageByYn.name}`;
  const store$ = useStore();

  const state$ = useConn(store$, state => get(state, key), [market]);

  const [data, run] = useRequest(getTranslatePageByYn, { manual: true });

  useEffect(() => {
    data && metaUpdateKV.with(data, { key }).invoke(store$);
  }, [data]);

  const state = useObservable(state$);

  useEffect(() => {
    market && isEmpty(state) && run({ yn: market.yn });
  }, [market]);

  return state;
};
