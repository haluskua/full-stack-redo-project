import React from 'react'
import {sendLostDetails} from '../apis/animals'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'

class AddLost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      species: '',
      owner: '',
      photo: '',
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }

  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e) {
    e.preventDefault();
    sendLostDetails(this.state.name, this.state.species, this.state.owner, this.state.photo)
  }

  render() {
    return (
      <div className="container topMargin columns">
        <div className='column is-3'>
          <h1 className='title is-3'>Fill in this form to let everyone know your pet is missing!!</h1>
          <br />
          <form method='POST' onSubmit={this.submit}>
              <div>
                  <div>
                  <label htmlFor="text">Pet Name:</label><input name="name" type="text" onChange={this.updateDetails} /> 
                  </div>
                  <div>
                  <label htmlFor="text">Species:</label><input name="species" type="text" onChange={this.updateDetails} />
                  </div>
                  <div>
                  <label htmlFor="text">Owner:</label><input name="owner" type="text" onChange={this.updateDetails} />
                  </div>
                  <div>
                  <label htmlFor="text">Upload Image:</label><input name="photo" type="text" onChange={this.updateDetails} />
                  </div>      
              </div>
              <input type="submit" value="Add Pet" />
          </form>
        </div>
        <img className="column is-8 is-offset-1" src='https://i.ytimg.com/vi/O2ZshzUKKo0/maxresdefault.jpg'/>
      </div>
    )}
}


export default AddLost