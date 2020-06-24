import React from "react";
import { Provider } from "react-redux";
import store from "./store";
// import useLoginHooks from "./useLoginWithGlobalStateHooks";
import useLoginHooks from "./useLoginWIthReduxHooks";

function App(props) {
  const loading = props.loading;

  const { token, login } = useLoginHooks();

  return (
    <div>
      <h1>Qiankun Demo Page</h1>
      {!token ? (
        <button onClick={login}>登录</button>
      ) : (
        <>
          {loading && <h4 className="subapp-loading">Loading...</h4>}
          <div id="subapp-viewport" />
        </>
      )}
    </div>
  );
}

export default (props) => {
  const loading = props.loading;
  return (
    <Provider store={store}>
      <App loading={loading} />
    </Provider>
  );
};
