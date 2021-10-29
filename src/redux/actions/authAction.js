import { UPDATE_AUTH_SUCCESS } from "../constants/authConstant";
import Swal from "sweetalert2";

export function updateAuth(authItem) {
  return (dispatch) => {
    dispatch({ type: UPDATE_AUTH_SUCCESS, payload: authItem });
    Swal.fire("Sửa Thành Công !");
  };
}
