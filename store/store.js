import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers';
import user from './logReducer'
const rootReducer = combineReducers({
  usersReducer,
  user
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
