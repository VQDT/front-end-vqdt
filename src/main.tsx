import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import { TestProvider } from "./context/test/testContext";
import { PreparatoryProvider } from "./context/preparatory/preparatoryContext";
import { QuestionProvider } from "./context/question/questionContext";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "http:",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <TestProvider>
        <PreparatoryProvider>
          <QuestionProvider>
            <RouterProvider router={router} />
          </QuestionProvider>
        </PreparatoryProvider>
      </TestProvider>
    </AuthProvider>
  </React.StrictMode>
);
