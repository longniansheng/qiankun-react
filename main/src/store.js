import { createStore } from "redux";
import actions from "./global";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
