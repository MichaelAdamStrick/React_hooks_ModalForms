import React, { createContext, useReducer, useContext } from "react";

export const ModalContext = createContext();
const initialState = {
  Hospital: [],
  Provider: [],
  HospitalDetails: [
    {
      id: null,
      HospitalName: "",
      Address: "",
      City: "",
      PhoneNumber: ""
    }
  ],
  ProviderDetails: [
    {
      id: null,
      ProviderName: "",
      Address: "",
      City: "",
      PhoneNumber: ""
    }
  ]
};

// const initialState = {
//   people: [
//     { firstName: "John", lastName: "Smith" },
//     { firstName: "Jane", lastName: "Doe" }
//   ]
// };

const addHospital = (Hospital, state) => {
  const newHospital = [...state.HospitalDetails, Hospital];

  return {
    ...state,
    id: Hospital.length + 1,
    HospitalDetails: newHospital
  };
};
const addProvider = (Provider, state) => {
  const newProvider = [...state.ProviderDetails, Provider];

  return {
    ...state,
    id: newProvider.length + 1,
    ProviderDetails: newProvider
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "ADDHOSPITAL":
      return addHospital(action.payload, state);
    case "DELETEHOSPITAL":
      return {
        ...state,
        HospitalDetails: state.HospitalDetails.filter(
          (t) => t !== action.payload
        )
      };
    case "DELETEPROVIDER":
      return {
        ...state,
        ProviderDetails: state.ProviderDetails.filter(
          (t) => t !== action.payload
        )
      };
    case "ADDPROVIDER":
      return addProvider(action.payload, state);
    case "field":
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addHospital = (person) => {
    dispatch({ type: "ADDHOSPITAL", payload: person });
  };
  const addProvider = (person) => {
    dispatch({ type: "ADDPROVIDER", payload: person });
  };
  return (
    <ModalContext.Provider
      value={{
        HospitalDetails: state.HospitalDetails,
        ProviderDetails: state.ProviderDetails,
        addHospital,
        state,
        dispatch,
        addProvider
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useStore = () => useContext(ModalContext);
