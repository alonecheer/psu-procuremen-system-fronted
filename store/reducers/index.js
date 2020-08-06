import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { form001_1Reducer } from "./form001_1Reducer";
import { get_userReducer } from "./get_userReducer";
export default combineReducers({
  post: postReducer,
  form001_1: form001_1Reducer,
  user: get_userReducer,
});
