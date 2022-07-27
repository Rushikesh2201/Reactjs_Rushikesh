import React from "react";
import Styles from "./style.module.css";
import { Button } from "react-bootstrap";

let ButtonSubmit = (props) => {
    return (
        <div>
            <Button className={[Styles.button,props.className].join(" ")} variant="orange" {...props}>Submit</Button>
        </div>
    )
}

export default ButtonSubmit;