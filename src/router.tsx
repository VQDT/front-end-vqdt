import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "./layout/Login.Layout";
import Login from "./pages/Auth/LoginPage";
import TestPainel from "./pages/Candidate/TestPainelPage";
import Preparatory from "./pages/Applicator/PreparatoryPage";
import RecoverPassword from "./pages/Auth/RecoverPasswordPage";
import CandidateResult from "./pages/Candidate/CandidateResultPage";
import AppLayout from "./layout/App.Layout";
import Protect from "./layout/Protect.Layout";
import AboutTest from "./pages/AboutTest";
import Test from "./pages/Candidate/TestPage";
import IntroductionTestPage from "./pages/Candidate/IntroductionTest.page";
import TestLayout from "./layout/Test.Layout";
import ApplicatorTestPage from "./pages/Applicator/ApplicatorTest.page";
import CourseAttendancePage from "./pages/Applicator/CourseAttendancePage";
import ApplicatorTestPainel from "./pages/Applicator/ApplicatorPainel.page";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { CreatorQuestionPage } from "./pages/CreatorQuestionPage";

export const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/CreatorQuestion",
        element: <CreatorQuestionPage />,
      },
    ],
  },

  // APPLICATOR ROUTES

  {
    element: <Protect permittedRoles={["applicator"]} />,
    children: [
      { path: "/aplicador", element: <ApplicatorTestPainel /> },
      { path: "/preparatorio", element: <Preparatory /> },
      { path: "/dia-de-curso/:id", element: <CourseAttendancePage /> },
      { path: "/aplicacao/:id", element: <ApplicatorTestPage /> },
    ],
  },

  // CANDIDATE ROUTES

  {
    element: <Protect permittedRoles={["candidate"]} />,
    children: [
      { path: "/candidato", element: <TestPainel /> },
      { path: "/provas/:id", element: <AboutTest /> },
      {
        path: "/prova",
        element: <TestLayout />,
        children: [
          { path: "/prova/introducao/:id", element: <IntroductionTestPage /> },
          { path: "/prova/:id", element: <Test /> },
        ],
      },
      {
        path: "/comprovante-de-participacao/:id",
        element: <CandidateResult />,
      },
    ],
  },

  // REVIEWER ROUTES

  {
    element: <Protect permittedRoles={["reviewer"]} />,
    children: [],
  },

  // SUPERVISOR ROUTES

  {
    element: <Protect permittedRoles={["supervisor"]} />,
    children: [],
  },

  // ELABORATOR ROUTES

  {
    element: <Protect permittedRoles={["elaborator"]} />,
    children: [],
  },

  // ADMIN ROUTES

  {
    element: <Protect permittedRoles={["admin"]} />,
    children: [],
  },

  // PUBLIC ROUTES

  {
    path: "/recuperar-senha",
    element: <RecoverPassword />,
  },

  {
    element: <LoginLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/cadastro", element: <h1>Register</h1> },
    ],
  },
]);

export default Router;
