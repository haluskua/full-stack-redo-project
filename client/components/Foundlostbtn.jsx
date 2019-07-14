import React from 'react'
import {connect} from 'react-redux'
import {fetchLost, fetchFound, fetchLostDog, fetchLostCat, fetchFoundDog, fetchFoundCat} from '../actions'


// class App extends React.Component {
//   constructor(props){
//     super(props)

//       this.handleClickLost = this.handleClickLost.bind(this)
//       this.handleClickFound = this.handleClickFound.bind(this)
//   }
  
  
//   handleClickLost() {
//     this.props.dispatch(fetchLost())
//   }

//   handleClickFound() {
//     this.props.dispatch(fetchFound())
//   }

    
//   render(){
//     return (
//       <>
//         <button onClick={this.handleClickLost}>Lost</button>
//         <button onClick={this.handleClickFound}>Found</button>
//       </>

//     ) 
//   }

class Foundlostbtn extends React.Component {
    constructor(props) {
      super(props)     
      
      this.handleClickLost = this.handleClickLost.bind(this)
      this.handleClickFound = this.handleClickFound.bind(this)
      this.handleClickDogLost = this.handleClickDogLost.bind(this)
      this.handleClickDogFound = this.handleClickDogFound.bind(this)
      this.handleClickCatLost = this.handleClickCatLost.bind(this)
      this.handleClickCatFound = this.handleClickCatFound.bind(this)

    }

    //LOST HANDLES

    handleClickLost() {
        this.props.dispatch(fetchLost())
    }

    handleClickDogLost() {
        this.props.dispatch(fetchLostDog())
    }

    handleClickCatLost() {
        this.props.dispatch(fetchLostCat())
    }

    //FOUND HANDLES

    handleClickFound() {
        this.props.dispatch(fetchFound())
    }

    handleClickDogFound() {
        this.props.dispatch(fetchFoundDog())
    }

    handleClickCatFound() {
        this.props.dispatch(fetchFoundCat())
    }


    render(){
      return (
        <div className="petsButtons">
            <div className="catsButton">
                <button onClick={this.handleClickCatLost} className="btnPets">Cats lost</button>
                <button onClick={this.handleClickCatFound} className="btnPets">Cats found</button>
            </div>
            <div className="dogsButton">
                <button onClick={this.handleClickDogLost} className="btnPets">Dogs lost</button>
                <button onClick={this.handleClickDogFound} className="btnPets">Dogs found</button>
            </div>
                <button onClick={this.handleClickLost} className="btnPets">All Lost Pets</button>
                <button onClick={this.handleClickFound} className="btnPets">All Found Pets</button>
        </div>
      )}
  }
  
  export default connect()(Foundlostbtn)