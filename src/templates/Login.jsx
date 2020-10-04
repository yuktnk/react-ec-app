import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../reducks/users/operations';

const Login = () => {
  const dispatch = useDispatch(); //実行結果を渡している
  
  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={()=>dispatch(signIn())}>
        ログイン
      </button>
    </div>
  )
}
export default Login
