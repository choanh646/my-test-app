import { combineReducers } from "redux";
import userReducer from './userReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  // nơi khai báo reducers con
  user: userReducer,
  auth: authReducer,
});
export default rootReducer;