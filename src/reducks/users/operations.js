import { signInAction } from "./actions";
import { push } from 'connected-react-router';
import { auth, db, FirebaseTimestamp } from '../../firebase/index';



export const signIn = () => {
// dispatchはActionsを呼び出す。getStateは現在のStoreのStateを取得できる
  return async (dispatch, getState) => {
    const state = getState()
    const isSignedIn = state.users.isSignedIn

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/yuktnk'

      const response = await fetch(url)
                        .then(res => res.json())
                        .catch(()=>null)
      
      const username = response.login
      dispatch(signInAction({
        isSignedIn: true,
        uid: "001",
        username: username
      }))
      dispatch(push('/'))
    }
  }
}

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    // Validation
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("必須項目が未入力です")
      return false
    }
    if (password !== confirmPassword) {
      alert("パスワードが一致しません。もう一度お試しください。")
      return false
    }

    return auth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;

        if (user) {
          const uid = user.uid;
          const timeStamp = FirebaseTimestamp.now();

          const userInitialData = {
            uid: uid,
            username: username,
            email: email,
            created_at: timeStamp,
            updated_at: timeStamp,
            role: "customer"
          }

          db.collection('users').doc(uid).set(userInitialData)
            .then( () => {
              dispatch(push('/'))
            })
        }
      })
  }
}