import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
// import Lostandfound from "./Lostandfound";
// import AddFound from "./AddFound";
// import AddLost from "./AddLost";

export function App({ auth }) {
  return (
    <Router>
      <div className="container has-text-centered">
        <div className="hero is-small navColor">
          <div className="hero-body has-text-centered">
            <Link to="/" className="">
              <h1 className="title is-1">Hello Kotare~?</h1>
            </Link>
            <Nav />
          </div>
        </div>

        <div className="">
          {!auth.isAuthenticated && <Route exact path="/" component={Home} />}
          <Route path="/home" component={Home} />
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/register" component={Register} /> */}
          <Route path="/Lostandfound" component={Lostandfound} />
          <Route path="/About" component={About} />
          <Route path="/addfound" component={AddFound} />
          <Route path="/addlost" component={AddLost} />
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
