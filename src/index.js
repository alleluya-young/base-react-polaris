import React from 'react';
import ReactDOM from 'react-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { normalize } from 'polished';
import { conf, ConfigProvider } from './core/config';

import { App } from './template/App';
import { ds } from './ds';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider value={{ config: conf() }}>
      <Global styles={normalize()} />
      <ThemeProvider theme={ds}>
        <App />
      </ThemeProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
