import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store,persistor } from "./Redux/store";
import { ChakraProvider } from "@chakra-ui/react";
// import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from "redux-persist/integration/react";
import { UserAuthContextProvider } from "./page/Context/UserAuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserAuthContextProvider>
  <ChakraProvider>
 <BrowserRouter>
  <Provider store={store}>
     <PersistGate persistor={persistor}>

    <App />
    </PersistGate>

    </Provider>
  </BrowserRouter>

  </ChakraProvider>
  </UserAuthContextProvider>
);