import * as types from "./type";
import Axios from "axios";

export const saveform001_1 = (data) => async (dispatch) => {
  //console.log(data);
  dispatch({
    type: types.SAVE_FORM001_1,
    payload: data,
  });
};

export const getdata = (username) => async (dispatch) => {
  // ดึงข้อมูลแบบฟอร์มจาก sid ทุกรายการ
  const res = await Axios.get(
    `http://localhost:3000/form001/findform001_1/${username}`
  );
  dispatch({
    type: types.SAVE_FORM001_1,
    // หา order_id ล่าสุด
    payload: res.data[res.data.length - 1],
  });
};
