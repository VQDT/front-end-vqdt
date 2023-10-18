import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/app";
import Login from "./pages/Login";
import AboutTest from "./pages/AboutTest";
import TestPainel from "./pages/Test";
import PersonalData from "./pages/PersonalData";
import Preparatory from "./pages/Preparatory";
import LayoutProtect from "./layout/LayoutProtext";

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
        path: "/provas",
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
]);

export default router;
