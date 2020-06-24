import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useLoginHooks() {
  const token = useSelector((state) => {
    console.log("token", state);
    return state.token;
  });

  const dispatch = useDispatch();

  const login = () => {
    dispatch({ type: "SET_TOKEN", payload: "张三" });
    window.history.replaceState(undefined, undefined, window.location.href);
  };

  return {
    token,
    login,
  };
}
