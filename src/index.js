import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { normalize } from 'polished';
import { conf, ConfigProvider } from './core/config';
import { ds } from './ds';
import { Persist } from '@bridge-start/persist';
import { Store, StoreProvider } from '@reactorx/core';

import { App } from './template/App';

const Connect = ({ store$, persist }) => {
  useEffect(() => {
    const clear = persist.persistRx(store$);
    return () => {
      clear();
    };
  }, []);
  return null;
};

const persist = new Persist({ name: 'app$' });
persist.loadPersistData(values => {
  const store$ = Store.create(values);
  ReactDOM.render(
    <React.StrictMode>
      <StoreProvider value={store$}>
        <Connect store$={store$} persist={persist} />
        <ConfigProvider value={{ config: conf() }}>
          <Global styles={normalize()} />
          <ThemeProvider theme={ds}>
            <App />
          </ThemeProvider>
        </ConfigProvider>
      </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
});
