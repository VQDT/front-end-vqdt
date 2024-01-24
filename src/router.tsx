import { createBrowserRouter } from "react-router-dom";
import ProtectLayout from "./layout/Protect.Layout";
import LoginLayout from "./layout/Login.Layout";
import Login from "./pages/Auth/LoginPage";
import TestPainel from "./pages/Candidate/TestPainelPage";
import Preparatory from "./pages/Applicator/PreparatoryPage";
import RecoverPassword from "./pages/Auth/RecoverPasswordPage";
import CandidateResult from "./pages/Candidate/CandidateResultPage";
import AppLayout from "./layout/App.Layout";
import AboutTest from "./pages/AboutTest";
import Test from "./pages/Candidate/TestPage";
import IntroductionTestPage from "./pages/Candidate/IntroductionTest.page";
import TestLayout from "./layout/Test.Layout";
import ApplicatorTestPage from "./pages/Applicator/ApplicatorTest.page";
import CourseAttendancePage from "./pages/Applicator/CourseAttendancePage";
import ApplicatorTestPainel from "./pages/Applicator/ApplicatorPainel.page";
import ErrorPage from "./pages/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectLayout>
        <AppLayout />
      </ProtectLayout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/candidato",
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
