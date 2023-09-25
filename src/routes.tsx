import { createBrowserRouter } from "react-router-dom";

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
import Teste from "./pages/Teste";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
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
            {
                path:"/app/teste",
                element:<Teste/>
            }
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