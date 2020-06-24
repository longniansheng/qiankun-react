import React, { useState, useEffect } from "react";
import actions from "./global";

export default function useLoginHooks() {
  const [token, setToken] = useState("");

  const login = () => {
    actions.setGlobalState({ token: "张三" });
    setToken("张三");
  };

  useEffect(() => {
    actions.onGlobalStateChange((state) => {
      window.history.replaceState(undefined, undefined, "/react1");
    });
  }, []);

  return {
    token,
    login,
  };
}
