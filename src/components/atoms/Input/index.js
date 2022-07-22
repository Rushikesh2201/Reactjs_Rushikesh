import React from "react";
import Styles from "./style.module.css";

let InputField = (props) => {
    return (
        <div>
            <input
                type="text"
                name="name"
                value={props.first_name}
                className={Styles.textInput}
            />
        </div>
    );
};

export default InputField;