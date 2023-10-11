import Button from "../../components/Button";
import { useState, FormEvent, useEffect } from "react";
import instance from "../../axios";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import logo from "../../assets/logo.png";


function Login() {

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [cpf, setCpf] = useState<string>('');
    const [password, setPass] = useState<string>('');
    
    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        instance.post("/users/auth/login", {cpf, password})
            .then((res)=> {
               console.log(res);
               sessionStorage.setItem("token", res.data.token);
               setLoggedIn(true)
            })
            .catch(console.log)
    }

    useEffect(() => {
        if (sessionStorage.getItem("token") && loggedIn)
           navigate("/")
    },[loggedIn, navigate])

    return (
        <>
            <div className="bg-Blue w-full h-screen p-3">
               <div className="flex justify-center content-center w-full h-screen flex-wrap">
                    <div>
                        <img src={logo} width={500} className="mb-4"/>
                        <div className="bg-white w-full rounded-xl p-8 justify-center content-center">
                            <form method="post" onSubmit={submit}>
                                <div className="mb-2">
                                    <Input placeholder="CPF" type='text' onChange={(ev) => setCpf(ev.target.value)} value={cpf}/>
                                    <Input placeholder="Senha" type='password' onChange={(ev)=> setPass(ev.target.value)} value={password}/>
                                </div>
                                <Link className="text-xs text-slate-500" to={"#"}>Esqueceu a senha?</Link>
                                <div className="mt-3">
                                    <Button size="w-full" type="submit">Entrar</Button>
                                </div>
                            </form>
                        </div>
                    </div>
               </div>
            </div>
        </>
    );
}

export default Login;