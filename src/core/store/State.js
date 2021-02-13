import { Actor, useObservable, useStore, Volume } from '@reactorx/core';
import { useMemo } from 'react';
import { isFunction, get } from 'lodash';

const StateActor = Actor.of('state');

export const updateKV = StateActor.named('update').effectOn(
  actor => actor.opts.key,
  (state, actor) => {
    return actor.arg(state);
  },
);

export const createStateUse = (k, initialState, persist = false) => () => {
  const key = persist ? `$${k}` : k;
  const store$ = useStore();
  const { state$, update, reset } = useMemo(() => {
    const initials = isFunction(initialState) ? initialState() : initialState;

    return {
      state$: Volume.from(store$, state => get(state, [key], initials)),
      update: stateOrUpdater => {
        return updateKV
          .with(
            (prevState = initials) => {
              if (isFunction(stateOrUpdater)) {
                return stateOrUpdater(prevState);
              }
              return stateOrUpdater;
            },
            { key },
          )
          .invoke(store$);
      },
      reset: () => updateKV.with(() => initials, { key }).invoke(store$),
    };
  }, [key]);

  const state = useObservable(state$);

  return [state, update, reset];
};
