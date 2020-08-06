import * as types from "./type";

const initalState = {
  info_form001_1: [],
};

export const form001_1Reducer = (state = initalState, action) => {
  switch (action.type) {
    case types.SAVE_FORM001_1:
      return {
        ...state,
        info_form001_1: action.payload,
      };
    case types.GET_FORM001_1:
      return {
        ...state,
        info_form001_1: action.payload,
      }
    default:
      return state;
  }
};
