import logo from "../../assets/logo.png"
import { Outlet } from "react-router-dom";

function Login() {

  return (
    <div className="w-full max-w-[400px] min-w-[320px] min-h-screen m-auto flex justify-center items-center flex-col filter drop-shadow-lg">
      <img src={logo} alt="" className="w-full max-w-[400px] mb-4" />
        <Outlet></Outlet>
    </div>
  );
}

export default Login;