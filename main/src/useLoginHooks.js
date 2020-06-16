import React, { useState, useEffect } from "react";

export default function useLoginHooks() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const login = () => {
    setToken("zhangsan");
    localStorage.setItem("token", "zhangsan");
  };

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
  }, [token]);

  return {
    token,
    login,
  };
}
