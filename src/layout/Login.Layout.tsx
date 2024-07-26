import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { Navigate, Outlet } from "react-router-dom";

function LoginLayout() {
  const isAuthenticated = useIsAuthenticated();
  if (isAuthenticated) {
    console.log("User is authenticated");
    return <Navigate to="/" />;
  } else {
    return (
      <div className="w-full min-h-screen bg-Blue flex justify-center items-center">
        <Outlet />
      </div>
    );
  }
}

export default LoginLayout;
