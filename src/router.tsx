import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/app";
import Login from "./pages/Login";
import AboutTest from "./pages/AboutTest";
import TestPainel from "./pages/Test";
import Preparatory from "./pages/Preparatory";
import LayoutProtect from "./layout/LayoutProtext";
import RecoverPassword from "./pages/RecoverPassword";
import Test from "./pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element:(
      <LayoutProtect>
        <Layout />
      </LayoutProtect>
    ),
    children: [
      {
        path: "/preparatorio",
        element: <Preparatory />,
      },
      {
        path: "/painel-provas",
        element: <TestPainel />,
      },
      {
        path: "/",
        element: <TestPainel />,
      },
      {
        path: "/provas/:id",
        element: <AboutTest />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/prova",
    element: <Test />,
  },
  {
    path: "/recuperar-senha",
    element: <RecoverPassword />, 
  },
]);

export default router;
