import React from 'react'
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Home = () => {
  const dispatch = useDispatch(); //実行結果を渡している
  return (
    <>
      <h2>
        Home
      </h2>
      <button onClick={() => dispatch(push('/login'))}>
        ログインページへ
      </button>
    </>
  )
}

export default Home
