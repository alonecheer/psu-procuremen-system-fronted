import * as types from "./type";

const initalState = {
  info_form001_2: [],
};

export const form001_2Reducer = (state = initalState, action) => {
  switch (action.type) {
    case types.SAVE_FORM001_2:
      return {
        ...state,
        info_form001_2: action.payload,
      };

    default:
      return state;
  }
};
