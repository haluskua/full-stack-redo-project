import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
// import {connect} from 'react-redux'

class Home extends React.Component {

  render() {
    return (
      <div className="container topMargin columns">
        <div className="column is-3">
          <h2 className='title is-4'>Welcome to LOST AND FOUND! Our mission is to reunite precious pets with their owners</h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3 className='title is-4'>Use the links above to go to the Lost and Found, or to register and login.</h3>
        </div>
        <img className="column is-8 is-offset-1" src='https://www.sheknows.com/wp-content/uploads/2018/08/horiz-cute-pets-computer_fd96wu.jpeg'></img>
      </div>
    )}
}


export default Home

