import {
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start,
} from "qiankun";

import render from "./ReactRender";
// import render from './render/VueRender';

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

const loader = (loading) => render({ loading });

/**
 * Step2 注册子应用
 */

registerMicroApps([
  {
    name: "react1",
    entry: "//localhost:7100",
    container: "#subapp-viewport",
    loader,
    activeRule: "/react1",
  },
  {
    name: "react2",
    entry: "//localhost:7101",
    container: "#subapp-viewport",
    loader,
    activeRule: "/react2",
  },
]);

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp("/react1");

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
});
