import React, { Component } from "react";

class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type="text" value={this.props.number}></input>
      </div>
    );
  }
}

export default DisplayNumber;
