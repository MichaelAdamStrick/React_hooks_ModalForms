import React from "react";
import Form from "./Form";
import "./styles.css";

export default function ModalForm(props) {
  return (
    <div className="container">
      <div className="col-sm-12">
        <h3>Client Profile</h3>
      </div>
      <Form />
    </div>
  );
}
