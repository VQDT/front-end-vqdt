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
import ElaboratorPainelPage  from "./pages/Elaborator/ElaboratorPainelPage";
import AplicadorLayout from "./layout/AplicadorLayout";
import ElaboradorLayout from "./layout/ElaboradorLayout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectLayout>
        <AppLayout />
      </ProtectLayout>
    ),
    errorElement: <ErrorPage reason="not found" />,
    children: [
      {
        path: "/candidato",
        element: <TestPainel />,
      },
      {
        path: "/provas/:id",
        element: <AboutTest />,
      },
      {
        path: "/comprovante-de-participacao/:id",
        element: <CandidateResult />,
      },
    ],
  },
  {
    path: "/elaborador",
    element: (
      <ProtectLayout>
        <ElaboradorLayout />
      </ProtectLayout>
    ),
    errorElement: <ErrorPage reason="not found"/>,
    children:[
      {
        path: "/elaborador",
        element: <ElaboratorPainelPage />,
      }
    ]
  },
  {
    path: "/aplicador",
    element: (
      <ProtectLayout>
        <AplicadorLayout />
      </ProtectLayout>
    ),
    children: [
      {
        path: "/aplicador/application/:id",
        element: <ApplicatorTestPage />,
      },
      {
        path: "/aplicador/courseDay/:id",
        element: <CourseAttendancePage />
      },
      {
        path: "/aplicador",
        element: <ApplicatorTestPainel />,
      },
      {
        path: "/aplicador/preparatorio",
        element: <Preparatory />,
      },
    ]
  },
  {
    path: "/error",
    element: <ErrorPage reason="not found" />,
    children: [
      {
        path: "/error/unauthorized",
        element: <ErrorPage reason="unauthorized" />,
      },
    ]
  },
  {
    path: "/prova",
    element: (
      <ProtectLayout>
        <TestLayout />
      </ProtectLayout>
    ),
    errorElement: <ErrorPage reason="not found" />,
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
    errorElement: <ErrorPage reason="not found" />,
  },
  {
    path: "/auth",
    element: <LoginLayout />,
    errorElement: <ErrorPage reason="not found" />,
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
