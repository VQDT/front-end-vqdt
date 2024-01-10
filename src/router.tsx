import { createBrowserRouter } from "react-router-dom";
import ProtectLayout from "./layout/Protect.Layout";
import LoginLayout from "./layout/Login.Layout";
import Login from "./pages/Login.page";
import TestPainel from "./pages/TestPainel.page";
import Preparatory from "./pages/Preparatory";
import RecoverPassword from "./pages/RecoverPassword";
import CandidateResult from "./pages/CandidateResult/CandidateResult";
import AppLayout from "./layout/App.Layout";
import AboutTest from "./pages/AboutTest";
import Test from "./pages/Test.page";
import IntroductionTestPage from "./pages/IntroductionTest.page";
import TestLayout from "./layout/Test.Layout";
import ApplicatorTestPage from "./pages/Applicator/ApplicatorTest.page";
import CourseAttendancePage from "./pages/Preparatory/courseAttendance.page";
import ApplicatorTestPainel from "./pages/Applicator/ApplicatorPainel.page";

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
        path: "/aplicador",
        element: <ApplicatorTestPainel />,  
      },
      {
        path: "/preparatorio",
        element: <Preparatory />,
      },
      {
        path: "/courseDay/:id",
        element: <CourseAttendancePage />
      },
      {
        path: "/provas/:id",
        element: <AboutTest />,
      },
      {
        path:"/comprovante-de-participacao/:id",
        element: <CandidateResult />,
      },
      {
        path: "/application/:id",
        element: <ApplicatorTestPage />,
      },
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
        path: "/prova/introduction/:id",
        element: <IntroductionTestPage />,
      },
      {
        path: "/prova/:id",
        element: <Test />,
      },
    ]
  },
  {
    path: "/recuperar-senha",
    element: <RecoverPassword />, 
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
        element: <h1>Register</h1>
      },
    ],
  }
]);

export default Router;
