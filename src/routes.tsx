import { createBrowserRouter } from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai'

import Modal from "./components/Modal";
import Home from "./pages/Home"
import Login from "./layout/login";
import Layout from "./layout/app";
import Agendamento from "./pages/agendamento";
import Provas from "./pages/Test";
import PersonalData from "./pages/PersonalData";
import CpfCadastrado from "./pages/CpfRegistered";
import Cpf from "./pages/CPF/Cpf";
import RecoverPassword from "./pages/Recuperar Senha";
import Error from "./pages/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/modal",
        element: <Modal title="ATENÇÃO" 
                        bg_color="bg-primary_red" 
                        content="Digite sua senha para encerrar a prova." 
                        input="true" 
                        buttons={[
                            {label: "VOLTAR", variant: "primary", icon: AiOutlineArrowLeft},
                            {label: "ENCERRAR", variant: "alert"}
                          ]}/>,
    }, {
        path: "/app",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/app/agendamento",
                element: <Agendamento />
            }, {
                path: "/app/provas",
                element: <Provas />
            }, {
                path: "/app/dados-pessoais",
                element: <PersonalData />
            },
        ]
    }, {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
        children: [
            {
                path: "/login/",
                element: <Cpf />
            }, {
                path: "/login/cpf-cadastrado",
                element: <CpfCadastrado />
            },
            {
                path :  '/login/recover',
                element: <RecoverPassword/>,
            }
        ]
    },
])