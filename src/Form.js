import React, { useContext, useState } from "react";
import { useStore } from "./PeopleContext";

const Form = (props) => {
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  const context = useStore();

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (person.firstName.trim() === "" || person.lastName.trim() === "") return;

    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim()
    };
    context.addPerson(newPerson);
    setPerson({ firstName: "", lastName: "" });
  };
  return (
    <div>
      <div>
        <h2>Add hospital:</h2>
      </div>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Add Person</button>
      </form>
    </div>
  );
};

export default Form;
