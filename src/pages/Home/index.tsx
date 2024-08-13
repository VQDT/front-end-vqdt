import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { UserOutput } from "../../models/User";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const user = useAuthUser() as UserOutput;
  const navigate = useNavigate();

  useEffect(() => { 
    if (user.roles[0] === "CANDIDATE" || user.roles[0] === "ADMIN") {
      console.log("Redirecting to /painel-de-provas");
      return navigate("/painel-de-provas");
    }
    if (user.roles[0] === "APPLICATOR") {
      console.log("Redirecting to /preparatorio");
      return navigate("/preparatorio");
    }
  }, [user, navigate]);

  return <div>Home!</div>;
};

export default Home;
