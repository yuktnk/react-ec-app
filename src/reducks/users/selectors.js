import { createSelector } from 'reselect';

const usersSelector = (state) => state.users;

// サインインしているかどうかを確認する
export const getIsSignedIn = createSelector(
  [usersSelector],
  state => state.isSignedIn
)

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
)

export const getUserName = createSelector(
  [usersSelector],
  state => state.username
)