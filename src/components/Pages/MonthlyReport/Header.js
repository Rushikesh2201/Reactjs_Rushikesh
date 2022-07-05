import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import Styles from "../../css/MonthlyReport/Header.module.css";

function Header(props) {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.Title}>{props.heading} </h1>
      <small className={Styles.smallText}>{props.title}</small>
      <div className={Styles.TextLead}>
        <h1 className={Styles.LeadTextH1}>
          {props.leads}
          <FontAwesomeIcon
            icon={faRegistered}
            className={Styles.IconRegistered}
            size="xs"
          />
        </h1>
      </div>
    </header>
  );
}

export default Header;
