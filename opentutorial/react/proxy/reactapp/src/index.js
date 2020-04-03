import React, { useState } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <input
        type="button"
        value="get Data"
        onClick={function() {
          fetch("/data.json")
            .then(function(result) {
              return result.json();
            })
            .then(function(json) {
              console.log(json);
            });
        }}
      ></input>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
