import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { ApiProvider } from '@reduxjs/toolkit/query/react'
// import jsonPlaceholderApi from './services/JsonPlaceholderAPI.ts'
import { Provider } from "react-redux";
import store from "./store.ts";

createRoot(document.getElementById("root")!).render(
  // To use only the Api slice instead of the redux store
  // <ApiProvider api={jsonPlaceholderApi}>
  //   <App />
  // </ApiProvider>
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
