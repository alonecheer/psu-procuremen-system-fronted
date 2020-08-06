import * as types from "./type";
import Axios from "axios";

export const saveform001_2 = (data) => async (dispatch) => {
  //console.log(data);
  dispatch({
    type: types.SAVE_FORM001_2,
    payload: data,
  });
};
