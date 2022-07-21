
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import Styles from "../../organisms/TableSEO/Table2.module.css";

let Icon = () => {
    return(
        <>
        <FontAwesomeIcon
            icon={faMagnifyingGlassChart}
            size="10x"
            className = {Styles.Icon}
          />
        </>
    )
}

export default Icon;