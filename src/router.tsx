import { createBrowserRouter } from "react-router-dom";
import ProtectLayout from "./layout/Protect.Layout";
import LoginLayout from "./layout/Login.Layout";
import Login from "./pages/Login.page";
import TestPainel from "./pages/TestPainel.page";
import Preparatory from "./pages/Preparatory";
import AppLayout from "./layout/App.Layout";
import AboutTest from "./pages/AboutTest";
import Test from "./pages/Test.page";
import IntroductionTestPage from "./pages/IntroductionTest.page";
import TestLayout from "./layout/Test.Layoyt";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectLayout>
        <AppLayout />
      </ProtectLayout>
    ),
    children: [
      {
        path: "/",
        element: <TestPainel />,
      },
      {
        path: "/preparatorio",
        element: <Preparatory />,
      },
      {
        path: "/provas/:id",
        element: <AboutTest />,
      }
    ],
  },
  {
    path: "/prova",
    element: (
      <ProtectLayout>
        <TestLayout />
      </ProtectLayout>
    ),
    children: [
      {
        path: "/prova/",
        element: <IntroductionTestPage />,
      },
      {
        path: "/prova/:id",
        element: <Test />,
      },
    ]
  },
  {
    path: "/auth",
    element: <LoginLayout />,
    children: [
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: (
          <h1 className="p-2 text-White text-lg font-medium">Register</h1>
        ),
      },
    ],
  }
]);

export default Router;
