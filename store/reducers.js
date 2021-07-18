import {ADD_VOTE, GET_USERS, REMOVE_VOTE, SET_USERS} from './actions';
const initialState = {
  users: []
};
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
        return {
            ...state,
            users: action.payload
          };
    case GET_USERS:
      return {...state, users: action.payload};
    case ADD_VOTE:{
        let updatedList = JSON.parse(JSON.stringify(state.users))
        for(var i = 0; i<  updatedList.length; i++){
            if(updatedList[i].name == action.payload){
               updatedList[i].votes = updatedList[i].votes + 1;
            }
        }
        return {...state, users:updatedList};
    }
    case REMOVE_VOTE:{
        let udpatedList = []
        for(var i = 0; i<  state.users.length; i++){
            if (temp.name == action.payload.name){
                temp.vote=temps.vote - 1;
            }
            udpatedList.push(temp)
        }
        return {...state, users:udpatedList};
    }

        
    default:{
        return state;
    }
     
  }
}
export default usersReducer;