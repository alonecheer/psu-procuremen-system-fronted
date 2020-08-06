import { combineReducers } from "redux";
import { postReducer } from "./example/postReducer";
import { form001_1Reducer } from "./form001_1/form001_1Reducer";
import { get_userReducer } from "./user/get_userReducer";
import { form001_2Reducer } from "./form001_2/form001_2Reducer";
export default combineReducers({
  post: postReducer,
  form001_1: form001_1Reducer,
  user: get_userReducer,
  form001_2: form001_2Reducer,
});
