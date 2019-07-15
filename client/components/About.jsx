import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import {connect} from 'react-redux'

class About extends React.Component {
  render() {
    return (
      <div className="container topMargin columns">
        <div className="column is-6">
          <h2 className="title is-6">John</h2>
          <img className="column is-10 is-offset-1" src="../images/John.jpg" />
        </div>
        <div className="column is-6">
          <h2 className="title is-6">Ompa</h2>
          <img className="column is-10 is-offset-1" src="../images/Ompa.jpg" />
        </div>
      </div>
    );
  }
}

export default About;
