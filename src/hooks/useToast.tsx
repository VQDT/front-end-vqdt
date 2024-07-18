import { Snackbar } from "@mui/material";
import { Toast } from "primereact/toast";
import React, { DOMElement, ReactNode, createContext, useRef } from "react";

interface IToastParams {
  //   severity: "success" | "info" | "warn" | "error" | undefined;
  message: string;
}

export interface IToastHook {
  showToast: (params: IToastParams) => void;
}

const snackbarComponent = (message: string) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={true}
      autoHideDuration={6000}
      message={message}
    />
  ) as unknown as Node;
};
export const ToastContext = createContext({});

function ToastContextProvider({ children }: { children: ReactNode }) {
  const toastContainer = document.getElementById("toast-container");

  const showToast = React.useCallback(
    (params: IToastParams) => {
      toastContainer?.appendChild(snackbarComponent(params.message));
    },
    [toastContainer]
  );

  const contextValue = React.useMemo(
    () => ({
      showToast,
    }),
    [showToast]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      <div id="toast-container" className="relative z-10 top-1 right-1"></div>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToastContext must be used within a ToastContextProvider"
    );
  }

  return context as IToastHook;
};

export default ToastContextProvider;
