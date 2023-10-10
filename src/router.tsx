import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./layout/app";
import Painel from "./pages/Painel de Provas/Painel";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/painel",
                element: <Painel />,
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
    }
]);

export default router;