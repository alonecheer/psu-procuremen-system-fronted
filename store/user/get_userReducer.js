import * as types from "./type";
const initalState = {
  user: {},
};
export const get_userReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
