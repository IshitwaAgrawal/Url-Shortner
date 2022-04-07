import * as actions from "./actions";
const initialState = {
  user: null,
  urls: null,
  jwt: null,
  users_count: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.change_user: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case actions.change_urls: {
      return {
        ...state,
        urls: action.payload,
      };
    }
    case actions.change_jwt: {
      return {
        ...state,
        jwt: action.payload,
      };
    }
    case actions.change_users_count: {
      return {
        ...state,
        users_count: action.payload,
      };
    }

    default:
      return state;
  }
};

export default appReducer;
