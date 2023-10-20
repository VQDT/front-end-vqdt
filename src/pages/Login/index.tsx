import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/logo.png";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../context/auth/useAuthContext";

type BodyType = {
    cpf: string;
    password: string;
}

function Login() {

    const navigate = useNavigate();
    const { user, login } = useAuthContext();

    const [body, setBody] = useState<BodyType>({
        cpf: "",
        password: "",
    });

    const handleCpfChange = (cpf: string) => {
        const inputCpf = cpf;
        const formattedCpf = inputCpf
          .replace(/\D/g, '') // Remove todos os caracteres não numéricos
          .slice(0, 11); // Limita a 11 dígitos
    
        const cpfWithMask = formattedCpf
          .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

        return cpfWithMask;
    };

    function handleChangeLogin(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.id === 'cpf' ? handleCpfChange(event.target.value) : event.target.value;
        setBody((prev) => ({
            ...prev,
            [event.target.id]: value
        }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        login(body.cpf.replace(/[^0-9]/g, ''), body.password);
    }
    
    if(user && sessionStorage.getItem('token')) {
        console.log(user)
        navigate('/')
    }

    return (
        <>
            <div className="bg-Blue w-full h-screen px-3">
                <div className="flex justify-center content-center w-full h-screen flex-wrap">
                    <div>
                        <img src={logo} width={500} className="mb-4" />
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white w-full rounded-xl p-8 justify-center content-center"
                        >
                            <div className="mb-2">
                                <Input
                                    placeholder="CPF"
                                    type="text"
                                    id="cpf"
                                    value={body.cpf}
                                    minLength={11}
                                    maxLength={14}
                                    onChange={handleChangeLogin}
                                    required
                                />
                                <Input
                                    placeholder="Senha"
                                    type="password"
                                    id="password"
                                    value={body.password}
                                    onChange={handleChangeLogin}
                                    required
                                />
                            </div>
                            <Link className="text-xs text-slate-500" to={"#"}>
                                Esqueceu a senha?
                            </Link>
                            <div className="mt-3">
                                <Button size="w-full" type="submit">Entrar</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;