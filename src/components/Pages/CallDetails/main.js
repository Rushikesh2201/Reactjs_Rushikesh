
import React, { Component } from "react";
import Heading from "./Heading";
import Table from "./Table";

export class Call extends Component {
  render() {
    return (
      <div className="container">

        <Heading />
        
        <div className="tableDiv">

          <Table />
          
        </div>
      </div>
    );
  }
}

export default Call;
