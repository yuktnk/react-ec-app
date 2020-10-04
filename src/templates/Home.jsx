import React from 'react';
import {getUserId, getUserName} from '../reducks/users/selectors';
import {useSelector} from 'react-redux';

const Home = () => {
  const selector = useSelector(state=>state);
  const uid = getUserId(selector)
  const username = getUserName(selector)

  return (
    <div>
      <h2>Home</h2>
      <p>ユーザーID：{uid}</p>
      <p>ユーザーネーム：{username}</p>
    </div>
  )
}

export default Home
