import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
import { ConnectedRouter } from 'connected-react-router';
import * as History from 'history';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';


const history = History.createBrowserHistory();
// 関数を実行し定数に入れ、propsとしてProviderコンポーネントに渡す
export const store = createStore(history); 

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
