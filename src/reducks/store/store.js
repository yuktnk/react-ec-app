import {
  createStore as reduxCreateStore, 
  combineReducers,
  applyMiddleware
} from 'redux';

import { connectRouter, routerMiddleware } from 'connected-react-router';

// import { ProductsReducer } from '../products/reducers';
import { UsersReducer } from '../users/reducers';

// createStore関数の定義
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      // products: ProductsReducer,
      router: connectRouter(history),
      users: UsersReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}