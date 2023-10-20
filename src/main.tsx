import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";
import { AuthProvider } from "./context/auth"
import { TestProvider } from "./context/test";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <TestProvider>
        <RouterProvider router={router} />
      </TestProvider>
    </AuthProvider>
  </React.StrictMode>,
)
