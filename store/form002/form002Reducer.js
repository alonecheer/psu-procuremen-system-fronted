import * as types from "./type";

const initalState = {
  info_form002: [],
};

export const form002Reducer = (state = initalState, action) => {
  switch (action.type) {
    case types.SAVE_FORM002:
      return {
        ...state,
        info_form002: action.payload,
      };
    default:
      return state;
  }
};
