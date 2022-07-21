import React, { Component } from "react";
import Form from "../../organisms/Form/ProfileForm";
import Navbar from "../../organisms/Navbar/navbar";

export class main extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <Form />
      </div>
    );
  }
}

export default main;
