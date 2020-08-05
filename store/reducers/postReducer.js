import * as types from "../type";
const initalState = {
  posts: [],
  post: [],
  loading: false,
  error: null,
};
export const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case type.GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
