import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import RequireAuth from "@auth-kit/react-router/RequireAuth";

function AppLayout() {
  return (
    <RequireAuth fallbackPath="/login">
      <>
        <Header />
        <Outlet />
      </>
    </RequireAuth>
  );
}

export default AppLayout;
