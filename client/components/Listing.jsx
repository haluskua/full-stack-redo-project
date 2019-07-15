import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { logoutUser } from "../actions/logout";
// import GetInfobtn from "./GetInfobtn";

class Listing extends React.Component {
  render() {
    return (
      <div className="right-tab">
        {this.props.information.map(information => {
          return (
            <div className="animal-box">
              <p>{information.id}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapGlobalStateToProps(globalState) {
  return {
    information: globalState.information
  };
}

export default connect(mapGlobalStateToProps)(Listing);
