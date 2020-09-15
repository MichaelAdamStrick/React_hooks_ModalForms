import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useStore } from "./PeopleContext";

const PeopleModal = (props) => {
  const [modal, setModal] = useState(false);
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  const context = useStore();

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    e.preventDefault();
    if (person.firstName.trim() === "" || person.lastName.trim() === "") return;

    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim()
    };
    context.dispatch({ type: "ADD_PERSON", payload: person, newPerson });
    setPerson({ firstName: "", lastName: "" });
  };
  // new form

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  // end new form
  return (
    <div>
      <Button color="danger" onClick={toggle} className="p-20">
        Add person
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Modal title
        </ModalHeader>
        <ModalBody>
          <form className="form" onSubmit={onSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="FirstName"
              value={person.firstName}
              onChange={onChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="LastName"
              value={person.lastName}
              onChange={onChange}
            />
            <button type="submit" onClick={toggle}>
              Add Person
            </button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PeopleModal;
