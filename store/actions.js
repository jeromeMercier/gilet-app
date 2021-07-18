export const GET_USERS = 'GET_USERS';
export const ADD_VOTE = 'ADD_VOTE';
export const REMOVE_VOTE = 'REMOVE_VOTE';
export const SET_USERS = 'SET_USERS';

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
  