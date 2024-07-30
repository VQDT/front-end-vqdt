import React from "react";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrimeReactProvider } from "primereact/api";
import { PreparatoryProvider } from "./context/preparatory/preparatoryContext";
import { QuestionProvider } from "./context/question/questionContext";
import { TestProvider } from "./context/test/testContext";
import "./index.css";
import router from "./router";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "http:",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <ToastContainer />
      <AuthProvider store={store}>
        <TestProvider>
        <PreparatoryProvider>
            <PrimeReactProvider>
              <QuestionProvider>
                <RouterProvider router={router} />
              </QuestionProvider>
            </PrimeReactProvider>
          </PreparatoryProvider>
        </TestProvider>
      </AuthProvider>
  </React.StrictMode>
);
