import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => <h1>React1 Page</h1>;
const About = () => <h1>React1 About Page</h1>;

function App(props) {
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   props.onGlobalStateChange((state, prev) => {
  //     if (state.token !== prev.token) {
  //       setToken(state.token);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const state = props.store.getState();
    setToken(state.token);
  }, []);
  return (
    <div className="App">
      <h1>当前登录账号:{token}</h1>
      <Router>
        <nav>
          <Link to="/react1">Home</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/react1/about">About</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/react2/about">OtherAbout</Link>
        </nav>
        <Suspense fallback={null}>
          <Switch>
            <Route path="/react1" exact component={Home} />
            <Route path="/react1/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
