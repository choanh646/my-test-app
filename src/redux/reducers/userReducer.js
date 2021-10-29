import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  SET_USER_SELECTED,
  DEL_USERS_REQUEST,
  DEL_USERS_SUCCESS,
  DEL_USERS_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from "../constants/userConstants";

const initialState = {
  lists: [],
  error: null,
  userSelected: {},
  // filter: "all",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    //GET
    case GET_USERS_REQUEST: {
      return { ...state, error: null };
    }
    case GET_USERS_SUCCESS: {
      return { ...state, lists: action.payload.data };
    }
    case GET_USERS_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    // SELECTED
    case SET_USER_SELECTED:
      return { ...state, userSelected: action.payload };

    // DELETE
    case DEL_USERS_REQUEST:
      return { ...state, error: null };
    case DEL_USERS_SUCCESS: {
      const { ID } = action.payload.data.data.ID;
      const listUserUpdate = state.lists.filter((item) => item.ID !== ID);
      return { ...state, isLoading: false, listUserUpdate };
    }
    case DEL_USERS_FAILURE:
      return { ...state, error: action.payload.error };

    // UPDATE
    // Chưa hoàn thành
    case UPDATE_USER_REQUEST:
      return { ...state, error: null };
    case UPDATE_USER_SUCCESS:
      return { ...state, userSelected: action.payload };
    case UPDATE_USER_FAILURE:
      return { ...state, error: action.payload.error };
      

    default:
      return state;
  }
}
export default userReducer;
