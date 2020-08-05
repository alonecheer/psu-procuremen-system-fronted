import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { form001_1Reducer } from "./form001_1Reducer"
export default combineReducers({
    post: postReducer,
    form001_1: form001_1Reducer
});
