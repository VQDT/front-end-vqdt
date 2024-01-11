import { Navigate } from "react-router-dom";
import useAuth from "../context/auth/useAuth"
import OnLoad from "../components/onLoad";
import "./style.css"

interface ProtectLayoutProps {
  children: React.ReactNode;
}

function ProtectLayout(props: ProtectLayoutProps) {
  const { user, onLoading } = useAuth()
  if(onLoading) return <><OnLoad/></>
  else if(user){
      return (
        <>
          <div className="FadeInAndOut">
            {props.children}
          </div>
        </>
      );
  }
  else{
      return <Navigate to={"/auth"} replace/>;
  }
}

export default ProtectLayout;