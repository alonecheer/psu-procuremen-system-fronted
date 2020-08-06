import * as types from "./type";
import Axios from "axios";

export const fetchposts = () => async (dispatch) => {
  //const res = await Axios.get('api/psot');
  dispatch({
    type: types.GET_POSTS,
    payload: ["1st post", "2nd post", "3 posts"],
  });
};
