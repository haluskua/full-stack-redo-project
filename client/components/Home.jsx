import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import {connect} from 'react-redux'

class Home extends React.Component {
  render() {
    return (
      <div className="container topMargin columns">
        <div className="column is-3">
          <h2 className="title is-4">Hello Kotare</h2>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        {/* <img
          className="column is-8 is-offset-1"
          src="https://www.sheknows.com/wp-content/uploads/2018/08/horiz-cute-pets-computer_fd96wu.jpeg"
        /> */}
      </div>
    );
  }
}

export default Home;
