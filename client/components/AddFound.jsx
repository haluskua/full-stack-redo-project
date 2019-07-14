import React from 'react'
import {sendDetails} from '../apis/animals'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'

class AddFound extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      species: '',
      contact: '',
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
    sendDetails(this.state.species, this.state.contact, this.state.photo)
  }

  render() {
    return (
      <div className="container columns topMargin">
        <div className='column is-3'> 
          <h1 className='title is-3'>Fill in this form to let everyone know you have found a pet!!</h1>
          <br />
          <form method='POST' onSubmit={this.submit}>
              <div>
                  <div>
                  <label htmlFor="text">Species:</label><input name="species" type="text" onChange={this.updateDetails}/>
                  </div>
                  <div>
                  <label htmlFor="text">Contact:</label><input name="contact" type="text" onChange={this.updateDetails}/>
                  </div> 
                  <div>
                  <label htmlFor="text">Upload Image:</label><input name="photo" type="text" onChange={this.updateDetails}/>
                  </div>    
              </div>
              <input type="submit" value="Add Pet" />
          </form>
        </div>
        <img className="column is-8 is-offset-1" src='https://i.ytimg.com/vi/O2ZshzUKKo0/maxresdefault.jpg'/>
      </div>
    )}
}


export default AddFound