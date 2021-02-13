import { Actor, useConn, useObservable, useStore } from '@reactorx/core';
import { get, isEmpty } from 'lodash';
import { useRequest } from '../request';
import { useEffect } from 'react';

const MapMetaActor = Actor.of('common-meta');

export const metaUpdateKV = MapMetaActor.named('update').effectOn(
  actor => actor.opts.key,
  (_, actor) => {
    return actor.arg?.objs || undefined;
  },
);

export const createMetaStateUse = (requestObject, params) => () => {
  const key = `meta::${requestObject.name}`;

  const store$ = useStore();

  const state$ = useConn(store$, state => get(state, key), []);

  const [data, run] = useRequest(requestObject, { manual: true });

  useEffect(() => {
    data && metaUpdateKV.with(data, { key }).invoke(store$);
  }, [data]);

  const state = useObservable(state$);

  useEffect(() => {
    isEmpty(state) && run(params);
  }, []);

  return state;
};
