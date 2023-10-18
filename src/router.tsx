import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/app";
import Login from "./pages/Login";
import AboutTest from "./pages/AboutTest";
import PainelTest from "./pages/PainelTests";
import Preparatory from "./pages/Preparatory";
import Test from "./pages/Test";
import LayoutProtect from "./layout/LayoutProtext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
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
        element: <PainelTest />,
      },
      {
        path: "/sobre-prova",
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
  }
]);

export default router;
