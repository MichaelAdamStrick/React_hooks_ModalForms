import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useStore } from "./ModalContext";

const HospitalModal = (props) => {
  const [modal, setModal] = useState(false);
  const context = useStore();
  const [hospital, setHospital] = useState(
    props.editing ? props.currentUser : context.HospitalDetails
    //   {
    //   HospitalName: "",
    //   Address: "",
    //   id: ""
    // }
  );

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    e.preventDefault();
    if (hospital.HospitalName.trim() === "" || hospital.Address.trim() === "")
      return;

    const newHospital = {
      HospitalName: hospital.HospitalName.trim(),
      Address: hospital.Address.trim()
    };
    context.addHospital(newHospital);
    setHospital({ HospitalName: "", Address: "", id: "" });
  };
  // new form

  const onChange = (e) => {
    setHospital({ ...hospital, [e.target.name]: e.target.value });
  };
  // end new form
  return (
    <div>
      <Button color="danger" onClick={toggle} className="p-20">
        Add hospital
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Add Hospital
        </ModalHeader>
        <ModalBody>
          <form className="form" onSubmit={onSubmit}>
            <input
              type="text"
              name="HospitalName"
              placeholder="HospitalName"
              value={hospital.HospitalName}
              onChange={onChange}
            />
            <input
              type="text"
              name="Address"
              placeholder="Address"
              value={hospital.Address}
              onChange={onChange}
            />
            <button type="submit" onClick={toggle}>
              Add hospital
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

export default HospitalModal;
