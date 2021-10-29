import { UPDATE_AUTH_SUCCESS } from "../constants/authConstant";

const initialState = {
  auth: {
    ID: 1,
    Ten: "Trần Văn Hùng",
    NgaySinh: "12/05/1997",
    GioiTinh: 0,
    NgayTao: "28/10/2021",
    Role: "Admin",
    Gmail: "gogogo0646@gmail.com",
  },
  error: null,
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    // UPDATE
    case UPDATE_AUTH_SUCCESS:
      return { ...state, auth: action.payload };

    default:
      return state;
  }
}
export default authReducer;
