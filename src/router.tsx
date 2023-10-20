import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/app";
import Login from "./pages/Login";
import AboutTest from "./pages/AboutTest";
import TestPainel from "./pages/Test";
import PersonalData from "./pages/PersonalData";
import Preparatory from "./pages/Preparatory";
import LayoutProtect from "./layout/LayoutProtext";
import RecoverPassword from "./pages/RecoverPassword";

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
        path: "/dados-pessoais",
        element: <PersonalData />,
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
    path: "/recuperar-senha",
    element: <RecoverPassword />, 
  },
]);

export default router;
