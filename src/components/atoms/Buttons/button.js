import React from "react";
import Styles from "./style.module.css";
import { Button } from "react-bootstrap";


const PlainButton = ({ className, title, ...rest }) => (
    <Button className={[Styles.btnButton, className && className].join(' ')} {...rest}>
      {title}
    </Button>
  );

export default PlainButton;


