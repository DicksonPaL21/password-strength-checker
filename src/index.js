import React from 'react';
import ReactDOM from 'react-dom';
import { configureApi } from 'react-reqq';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';

export const store = configureApi({
  endpoint: process.env.REACT_APP_END_POINT,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
