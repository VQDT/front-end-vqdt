import { AiOutlineCalendar, AiFillAlert } from "react-icons/ai";
import Button from "../../components/Button";
import TestCard from "../../components/TestCard";
import ListCard from "../../components/ListCard";
import { useEffect, useState } from "react";
import instance from "../../axios";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import logo from "../../assets/logo.png";

type TestCard = {
    id: string;
    name: string;
    description: string;
    dateStart: string;
}

function Login() {
    const id = "014f79e8-b891-4329-85a5-bb54ba5692ea"
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    
    useEffect(() => {
      return () => {
        instance.get(`/users/${id}/tests`)
        .then(
            res => {
                console.log(res.data);
            }
        )
        .catch((err) => {
            console.log(err);
        })
      }
    }, [id])
    return (
        <>
            <div className="bg-Blue w-full h-screen p-3">
               <div className="flex justify-center content-center w-full h-screen flex-wrap">
                    <div>
                        <img src={logo} width={500} className="mb-4"/>
                        <div className="bg-white w-full rounded-xl p-8 justify-center content-center">
                            <div className="mb-2">
                                <Input placeholder="Email" type='email' onChange={(ev) => setEmail(ev.target.value)} value={email}/>
                                <Input placeholder="Senha" type='password' onChange={(ev)=> setPass(ev.target.value)} value={pass}/>
                            </div>
                            <Link className="text-xs text-slate-500" to={"#"}>Esqueceu a senha?</Link>
                            <div className="mt-3">
                                <Button size="w-full">Entrar</Button>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </>
    );
}

export default Login;