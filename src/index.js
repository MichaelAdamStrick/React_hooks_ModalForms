import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ModalProvider } from "./ModalContext";
import { PeopleProvider } from "./PeopleContext";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <PeopleProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </PeopleProvider>
  </React.StrictMode>,
  rootElement
);
