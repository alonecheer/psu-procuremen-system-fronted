import * as types from "./type";
import Axios from "axios";

export const fetchuser = (username) => async (dispatch) => {
  const res = await Axios.get(`http://localhost:3000/users/${username}`);
  //console.log(res.data[0]);
  dispatch({
    type: types.GET_USER,
    payload: res.data[0],
  });
};
