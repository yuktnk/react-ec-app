import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 関数を実行し定数に入れ、propsとしてProviderコンポーネントに渡す
export const store = createStore(); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
