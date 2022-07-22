import React from "react";
import Styles from "./style.module.css";
import { Button } from "react-bootstrap";

let ButtonSubmit = () => {
    return (
        <div>
            <Button className={Styles.button} variant="orange">Submit</Button>
        </div>
    )
}

export default ButtonSubmit;