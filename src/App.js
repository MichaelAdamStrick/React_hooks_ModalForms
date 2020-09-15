import React, { useState } from "react";
import "./styles.css";
import PeopleModal from "./PeopleModal";

import People from "./People";
import HospitalModal from "./HospitalModal";
import Hospitals from "./Hospitals";
import { useStore } from "./ModalContext";

export default function App() {
  const [editing, setEditing] = useState(false);
  const context = useStore();
  const [currentHospital, setCurrentHospital] = useState(context);
  const editRow = (context) => {
    setEditing(true);

    setCurrentHospital(context);
  };

  const updateHospital = (id, updatedHospital) => {
    setEditing(false);
  };
  return (
    <div className="App">
      <h1>Add Family Members</h1>

      <PeopleModal />
      <People />
      <hr />
      <HospitalModal
        editing={editing}
        setEditing={setEditing}
        currentUser={currentHospital}
        setCurrentUser={setCurrentHospital}
        updateUser={updateHospital}
      />
      <Hospitals editRow={editRow} />
      {/* <Form /> */}
    </div>
  );
}
