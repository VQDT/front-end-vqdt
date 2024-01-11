import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="w-full flex justify-center items-center align-middle h-screen bg-white">
        <div className="w-full flex-col flex justify-center items-center">
            <h1>Página não encontrada</h1>
            <div className="mt-3">
                <Button type="button" onClick={() => navigate("/auth")}>Voltar ao inicio</Button>
            </div>
        </div>
    </div>
  );
}

export default ErrorPage;
