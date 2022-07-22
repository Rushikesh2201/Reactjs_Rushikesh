import React from "react";
import { Modal } from "react-bootstrap";
import { createPortal } from "react-dom";

const modalStyle1 = {
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // zIndex: 2050, // only to make this modal above header bar
};
const modalStyle2 = {
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1050, // only to make this modal above header bar
};

const MyModal = (props) => (
  <div style={modalStyle1}>
    <Modal {...props}>{props.children}</Modal>
  </div>
);

const CustomModal = (props) =>
  createPortal(
    <div style={modalStyle2}>{props.children}</div>,
    document.getElementById("modal_root")
  );

export { CustomModal, MyModal };
