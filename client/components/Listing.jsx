import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'
import Foundlostbtn from './Foundlostbtn'

class Listing extends React.Component {
  
    render() {
    return (
      <div className="right-tab">
        {this.props.animals.map(animal => {
            return (
                <div className="animal-box">
                    <img src={animal.photo} alt=""/>
                </div>
            )
        })}
      </div>
    )
  }
}

function mapGlobalStateToProps(globalState) {
    return {
      animals: globalState.animals
    }
  }
  


  export default connect(mapGlobalStateToProps)(Listing)