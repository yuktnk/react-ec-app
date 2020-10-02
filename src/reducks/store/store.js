import {createStore as reduxCreateStore, combineReducers} from 'redux';

// import { ProductsReducer } from '../products/reducers';
import { UsersReducer } from '../users/reducers';

// createStore関数の定義
export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      // products: ProductsReducer,
      users: UsersReducer
    })
  )
}