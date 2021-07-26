import Firebase, { db } from './firebase.js'

export const GET_USERS = 'GET_USERS';
export const ADD_VOTE = 'ADD_VOTE';
export const REMOVE_VOTE = 'REMOVE_VOTE';
export const SET_USERS = 'SET_USERS';

// define types

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

let users = [
    {name:'jerome', votes:3, id:0},
    {name:'luc', votes:3, id:1}
]
    
    

    ;
    
export const getUsers = () => {

    try {
return async dispatch => { dispatch({
              type: GET_USERS,
              payload:users
            });
        };
    } catch (error) {
        // Add custom logic to handle errors
      }
}

export const addVote = user => dispatch => {
    dispatch({
      type: ADD_VOTE,
      payload: user,
    });
  };
  export const removeVote = user => dispatch => {
    dispatch({
      type: REMOVE_VOTE,
      payload: user,
    });
  };
  
  export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)

            dispatch(getUser(response.user.uid))
        } catch (e) {
            alert(e)
        }
    }
}

export const getUser = uid => {
    return async (dispatch, getState) => {
        try {
            const user = await db
                .collection('users')
                .doc(uid)
                .get()

            dispatch({ type: LOGIN, payload: user.data() })
        } catch (e) {
            alert(e)
        }
    }
}
export const signup = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                }

                db.collection('users')
                    .doc(response.user.uid)
                    .set(user)

                dispatch({ type: SIGNUP, payload: user })
            }
        } catch (e) {
            alert(e)
        }
    }
}