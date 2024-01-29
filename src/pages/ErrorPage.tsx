import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

interface ErrorPageProps {
  reason: "not found" | "unauthorized";
}

function ErrorPage({ reason="not found" }:ErrorPageProps) {
  const navigate = useNavigate()
  return (
    <>
      {
        reason === "not found" ?
          <div className="w-full flex justify-center items-center align-middle h-screen bg-white">
            <div className="w-full flex-col flex justify-center items-center">
                <h1>Página não encontrada - 404</h1>
                <div className="mt-3">
                    <Button type="button" onClick={() => navigate("/auth")}>Voltar ao inicio</Button>
                </div>
            </div>
          </div>
        : reason === "unauthorized" ?
          <div className="w-full flex justify-center items-center align-middle h-screen bg-white">
            <div className="w-full flex-col flex justify-center items-center">
                <h1>Usuário não autorizado - 401</h1>
                <div className="mt-3">
                    <Button type="button" onClick={() => navigate("/auth")}>Voltar ao inicio</Button>
                </div>
            </div>
          </div>
        : null
      }
      
    </>
    
  );
}

export default ErrorPage;
