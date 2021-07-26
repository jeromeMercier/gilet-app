import { combineReducers } from 'redux'
import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD } from './actions'

const user = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            if(action.payload != undefined){
                return action.payload
            }
            else{
                return state
            }
        case SIGNUP:
            return action.payload
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        default:
            return state
    }
}



export default user