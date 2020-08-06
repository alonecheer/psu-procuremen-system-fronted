import * as types from "../type";

export const savedata = () => async (dispatch) => {
  dispatch({
    type: types.SAVE_FORM001_1,
    payload: dispatch.data,
  });
};
