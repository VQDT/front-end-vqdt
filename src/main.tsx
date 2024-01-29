import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";
import { AuthProvider } from "./context/auth/authContext"
import { TestProvider } from "./context/test/testContext";
import { PreparatoryProvider } from "./context/preparatory/preparatoryContext";
import { ElaboratorProvider } from "./context/elaborator/elaboratorContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <TestProvider>
        <PreparatoryProvider>
          <ElaboratorProvider>
            <RouterProvider router={router} />
          </ElaboratorProvider>
        </PreparatoryProvider>
      </TestProvider>
    </AuthProvider>
  </React.StrictMode>,
)
