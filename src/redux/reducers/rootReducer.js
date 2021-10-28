import { combineReducers } from "redux";
import userReducer from './userReducer'

const rootReducer = combineReducers({
  // nơi khai báo reducers con
  user: userReducer,
});
export default rootReducer;