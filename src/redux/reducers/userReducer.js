import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "../constants/userConstants";

const initialState = {
  lists: [],
  error: null,
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

    default:
      return state;
  }
}
export default userReducer;
