import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/zh_CN';
import { RenderRouter } from './config/router.config';
import store from './store';

import './global.less';

const App = () => {
  return (
    <React.StrictMode>
      <ConfigProvider locale={locale}>
        <Provider store={store}>
          <HashRouter>
            <RenderRouter />
          </HashRouter>
        </Provider>
      </ConfigProvider>
    </React.StrictMode>
  );
};

const container = document.getElementById('root');

ReactDOM.render(<App />, container);
