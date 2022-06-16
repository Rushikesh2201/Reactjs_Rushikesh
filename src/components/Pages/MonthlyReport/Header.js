
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRegistered} from '@fortawesome/free-solid-svg-icons'

export class Header extends Component {
    render(){
        return(

          <header className="App-header">
            <h1 className="Title">Monthly Report </h1>
            <small className="smallText">Tobey Harris - Heath's Auto</small>
            <div className="TextLead">
              <h1 className="LeadTextH1">Leads Near Me
              <FontAwesomeIcon
                  icon={faRegistered}
                  className="IconRegistered"
                  size="xs"
                />
                </h1>
            </div>
          </header>
    )
}
}

export default Header;