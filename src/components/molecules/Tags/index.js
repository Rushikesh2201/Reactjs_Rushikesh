import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import Styles from "./style.module.css";

function Tags(props) {
  return (
    <div className={[Styles.MainContent]}>
      <div className={[Styles.TagContainer]}>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlassChart}
            size="10x"
            className={Styles.Icon}
          />
        </div>
        <div>
        <h2 className={Styles.Local}>{props.heading}</h2>
        </div>
      </div>
      <div className={Styles.LocalUrlDiv}>
        <h2 className={Styles.LocalUrl}>{props.url}</h2>
      </div>

      <div className={Styles.LocalParaDiv}>
        <p className={Styles.LocalPara}>{props.description} </p>
      </div>
    </div>
  );
}
export default Tags;
