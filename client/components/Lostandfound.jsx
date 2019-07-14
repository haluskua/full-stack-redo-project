import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'
import Foundlostbtn from './Foundlostbtn'
import Listing from './Listing'

class LostAndFound extends React.Component {

  render() {
    return (
      <div>
        <h1 className="topText title is-2">Please choose from the following options</h1>
        <br />
        <section className="tab-container">
          <div className="left-tab">
            <h2 className="searchTitle">SEARCH LOST AND FOUND</h2>
              <Foundlostbtn/>
              <div className="bottomLeftBox">
                <h2>HAVE YOU LOST OR FOUND A PET</h2>
                <br />
                <Link to='/addfound'><h2>Go to add found pet form</h2></Link>
                <br />
                <Link to='/addlost'><h2>Go to add lost found form</h2></Link>
              </div>
          </div>
          <div className="right-tab">
            <Listing/>
          </div>
        </section>
      </div>
        

    )
  }

}

export default LostAndFound;
