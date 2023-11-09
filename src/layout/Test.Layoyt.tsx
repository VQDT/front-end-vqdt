import { Outlet } from "react-router-dom";

function TestLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default TestLayout;