import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Home = () => <h1>React2 Page</h1>;
const About = () => <h1>React2 About Page</h1>;

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/react2">Home</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/react2/about">About</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/react1/about">OtherAbout</Link>
        </nav>
        <Suspense fallback={null}>
          <Switch>
            <Route path="/react2" exact component={Home} />
            <Route path="/react2/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
