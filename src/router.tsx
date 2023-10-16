import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/app";
import Login from "./pages/Login";
import AboutTest from "./pages/AboutTest";
import Test from "./pages/Test";
import PersonalData from "./pages/PersonalData";
import Preparatory from "./pages/Preparatory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        element: <Test />,
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
