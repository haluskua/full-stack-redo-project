import React from "react";
import { connect } from "react-redux";
import { fetchInfo } from "../actions";

class GetInfobtn extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickGetInfo = this.handleClickGetInfo.bind(this);
  }

  handleClickGetInfo() {
    this.props.dispatch(fetchInfo());
  }

  render() {
    return (
      <div className="petsButtons">
        <div className="catsButton">
          <button onClick={this.handleClickGetInfo} className="btnPets">
            Step ONE
          </button>
          <button onClick={this.handleClickCatFound} className="btnPets">
            Step TWO
          </button>
        </div>
        <div className="dogsButton">
          <button onClick={this.handleClickDogLost} className="btnPets">
            Step THREE
          </button>
          <button onClick={this.handleClickDogFound} className="btnPets">
            STEP FOUR
          </button>
        </div>
        <button onClick={this.handleClickLost} className="btnPets">
          Step FIVE
        </button>
        <button onClick={this.handleClickFound} className="btnPets">
          Step SIX
        </button>
      </div>
    );
  }
}

export default connect()(GetInfobtn);
