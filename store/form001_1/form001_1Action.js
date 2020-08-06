import * as types from "./type";

export const savedata = (data) => async (dispatch) => {
  //console.log(data);
  dispatch({
    type: types.SAVE_FORM001_1,
    payload: data,
  });
};
