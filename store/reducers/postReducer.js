import * as types from "../type";
const initalState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
  test: "dd",
};
export const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
