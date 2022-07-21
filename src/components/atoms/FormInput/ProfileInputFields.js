import React from "react";
import Styles from "../../organisms/Form/form.module.css";

let InputField = (props) => {
  return (
    <div>
      <h1 className={Styles.text}>{props.Heading1} </h1>
      <input
        type="text"
        name="name"
        value={props.first_name}
        className={Styles.textInput}
      />
      <br />
      <h1 className={Styles.text}> {props.Heading2} </h1>
      <input
        type="text"
        name="name"
        value={props.last_name}
        className={Styles.textInput}
      />
      <br />
      <h1 className={Styles.textEmail}>{props.Heading3}</h1>
      <input
        type="email"
        name="name"
        value={props.email}
        className={Styles.textInput}
      />
      <br />
    </div>
  );
};

export default InputField;
