import React from "react";
import { createContext } from "react";

const peopleContext = createContext({ people: [], addPerson: (person) => {} });

const initialState = {
  people: [
    { firstName: "John", lastName: "Smith" },
    { firstName: "Jane", lastName: "Doe" }
  ]
};

const addPerson = (person, state) => {
  const newPeople = [...state.people, person];

  return {
    ...state,
    people: newPeople
  };
};

const PeopleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return addPerson(action.payload, state);
    default:
      return state;
  }
};

export const PeopleProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(PeopleReducer, initialState);
  const addPerson = (person) => {
    dispatch({ type: "ADD_PERSON", payload: person });
  };
  return (
    <peopleContext.Provider value={{ people: state.people, addPerson }}>
      {children}
    </peopleContext.Provider>
  );
};

export const useStore = () => React.useContext(peopleContext);
