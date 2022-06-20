
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRegistered} from '@fortawesome/free-solid-svg-icons'
import Styles from '../../css/MonthlyReport/Header.module.css'

export class Header extends Component {
    render(){
        return(

          <header className={Styles.header}>
            <h1 className={Styles.Title}>Monthly Report </h1>
            <small className={Styles.smallText}>Tobey Harris - Heath's Auto</small>
            <div className={Styles.TextLead}>
              <h1 className={Styles.LeadTextH1}>Leads Near Me
              <FontAwesomeIcon
                  icon={faRegistered}
                  className={Styles.IconRegistered}
                  size="xs"
                />
                </h1>
            </div>
          </header>
    )
}
}

export default Header;