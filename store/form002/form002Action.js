import * as types from "./type";
import Axios from "axios";

export const saveform002 = (data) => async (dispatch) => {
  //console.log(data);
  dispatch({
    type: types.SAVE_FORM002,
    payload: data,
  });
};
