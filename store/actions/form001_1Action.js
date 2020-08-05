import * as types from "../type";

export const savedata = () => async (dispatch, data) => {
  dispatch({
    type: types.SAVE_FORM001_1,
    payload: data,
  });
};
