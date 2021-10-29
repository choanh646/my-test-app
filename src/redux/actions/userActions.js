import axios from "axios";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  DEL_USERS_REQUEST,
  // DEL_USERS_SUCCESS,
  DEL_USERS_FAILURE,
  ADD_USERS_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  SET_USER_SELECTED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from "../constants/userConstants";
import Swal from "sweetalert2";

export function getListUser() {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_REQUEST });
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://617af02bcb1efe00170100d6.mockapi.io/lists",
      });
      dispatch({ type: GET_USERS_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function setUserSelected(item) {
  return (dispatch) => {
    dispatch({ type: SET_USER_SELECTED, payload: item });
  };
}

export function deleteUser(id) {
  return async (dispatch) => {
    dispatch({ type: DEL_USERS_REQUEST });
    try {
      await axios({
        method: "DELETE",
        url: `https://617af02bcb1efe00170100d6.mockapi.io/lists/${id}`,
      });
      Swal.fire("Xóa Thành Công !");
      dispatch(getListUser());
    } catch (error) {
      Swal.fire("Có lỗi xảy ra!");
      dispatch({
        type: DEL_USERS_FAILURE,
        payload: { error: error.response?.data },
      });
    }
  };
}

export function addUser(value) {
  return async (dispatch) => {
    dispatch({ type: ADD_USERS_REQUEST });
    try {
      const data = await axios({
        method: "POST",
        url: "https://617af02bcb1efe00170100d6.mockapi.io/lists",
        data: value,
      });
      Swal.fire("Thêm Thành Công !");
      dispatch({ type: ADD_USER_SUCCESS, payload: { data } });
      dispatch(getListUser());
    } catch (error) {
      Swal.fire("Có lỗi xảy ra!");
      dispatch({
        type: ADD_USER_FAILURE,
        payload: { error: error.response?.data },
      });
    }
  };
}

  // Chưa hoàn thành
export function updateUser(userSelected) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    try {
      const { data } = await axios({
        method: "PUT",
        url: `https://617af02bcb1efe00170100d6.mockapi.io/lists/${userSelected.ID}`,
      });
      Swal.fire("Sửa Thành Công !");
      dispatch({ type: UPDATE_USER_SUCCESS, payload: { userSelected } });
    } catch (error) {
      Swal.fire("Có lỗi xảy ra!");
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: { error: error.response?.data },
      });
    }
  };
}
