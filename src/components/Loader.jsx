import React, { Component } from "react";
import "./Loader.css"

class Loader extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {};
  render() {
    return (
      <div className="container">
        <div className="loading">
          <span className="shape shape-1"></span>
          <span className="shape shape-2"></span>
          <span className="shape shape-3"></span>
          <span className="shape shape-4"></span>
        </div>
      </div>
    );
  }
}

export default Loader;
