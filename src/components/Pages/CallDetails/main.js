
import React, { Component } from "react";
import Heading from "./Heading";
import Table from "./Table";
import Styles from '../../css/CallDetails/main.module.css'

export class Call extends Component {
  render() {
    return (
      <div className={Styles.container}>

        <Heading />
        
        <div className={Styles.tableDiv}>

          <Table />
          
        </div>
      </div>
    );
  }
}

export default Call;
