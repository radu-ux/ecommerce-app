import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import "./index.css";
import AppRoutes from './ui/AppRoutes';
import StoreProvider from "./ui/StoreProvider";
import store from "./application/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StoreProvider>
        <AppRoutes />
      </StoreProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
