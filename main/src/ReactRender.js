import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/**
 * 渲染子应用
 */
function Render(props) {
  const { loading } = props;

  return (
    <>
      <App loading={loading} />
    </>
  );
}

export default function render({ loading }) {
  const container = document.getElementById("root");
  ReactDOM.render(<Render loading={loading} />, container);
}
