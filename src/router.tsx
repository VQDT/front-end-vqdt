import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./layout/app";
import Painel from "./pages/Painel de Provas/Painel";

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
    }
]);

export default router;