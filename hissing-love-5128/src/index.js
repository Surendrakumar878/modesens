import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ChakraProvider } from "@chakra-ui/react";
// import { ChakraProvider } from '@chakra-ui/react';
// import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>


  </ChakraProvider>
);
