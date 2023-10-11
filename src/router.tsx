import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./layout/app";
import Painel from "./pages/Painel de Provas/Painel";
import Login from "./pages/Login";
import AboutTest from "./pages/AboutTest";

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
            },
            {
                path: "/aboutTest",
                element: <AboutTest />,
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    }
]);

export default router;