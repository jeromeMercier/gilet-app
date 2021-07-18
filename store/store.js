import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers';
const rootReducer = combineReducers({
  usersReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
