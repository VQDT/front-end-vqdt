import Button from "../../components/Button";
import { Link } from "react-router-dom";

function CpfCadastrado() {
    return(
        <div className="bg-white p-8 rounded">
            <div className="text-center">
                <div className="mb-4 py-4 flex relative items-center">
                    <p className="m-auto font-medium block w-full absolute">CPF já cadastrado!</p>
                </div>
                <p>Você lembra sua senha?</p> 
                <p className="mb-8">Se sim, clique em Próximo. Se não clique em Recuper Senha</p>
                <div className="flex flex-col gap-2">
                    <Button variant="primary">Próximo</Button>
                    <Link to={"../recover"} className=""><Button variant="secondary">Recuperar Senha</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default CpfCadastrado;