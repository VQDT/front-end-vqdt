import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/App.Layout";
import Protect from "./layout/Protect.Layout";
import TestLayout from "./layout/Test.Layout";
import AboutTest from "./pages/AboutTest";
import ApplicatorTestPainel from "./pages/Applicator/ApplicatorPainel.page";
import ApplicatorTestPage from "./pages/Applicator/ApplicatorTest.page";
import CourseAttendancePage from "./pages/Applicator/CourseAttendancePage";
import Preparatory from "./pages/Applicator/PreparatoryPage";
import Login from "./pages/Auth/LoginPage";
import RecoverPassword from "./pages/Auth/RecoverPasswordPage";
import CandidateResult from "./pages/Candidate/CandidateResultPage";
import IntroductionTestPage from "./pages/Candidate/IntroductionTest.page";
import Test from "./pages/Candidate/TestPage";
import TestPainel from "./pages/Candidate/TestPainelPage";
import { CreatorQuestionPage } from "./pages/CreatorQuestionPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import LogoutPage from "./pages/Logout/LogoutPage";

export const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/CreatorQuestion",
        element: <CreatorQuestionPage />,
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
        element: <Protect permittedRoles={["candidate", "admin"]} />,
        children: [
          { path: "/painel-de-provas", element: <TestPainel /> },
          { path: "/provas/:id", element: <AboutTest /> },
          {
            path: "/prova",
            element: <TestLayout />,
            children: [
              {
                path: "/prova/introducao/:id",
                element: <IntroductionTestPage />,
              },
              { path: "/prova/:id", element: <Test /> },
            ],
          },
          {
            path: "/comprovante-de-participacao/:id",
            element: <CandidateResult />,
          },
        ],
      },

      // // REVIEWER ROUTES

      // {
      //   element: <Protect permittedRoles={["reviewer"]} />,
      //   children: [],
      // },

      // // SUPERVISOR ROUTES

      // {
      //   element: <Protect permittedRoles={["supervisor"]} />,
      //   children: [],
      // },

      // // ELABORATOR ROUTES

      // {
      //   element: <Protect permittedRoles={["elaborator"]} />,
      //   children: [],
      // },

      // // ADMIN ROUTES

      // {
      //   element: <Protect permittedRoles={["admin"]} />,
      //   children: [],
      // },
    ],
  },

  // PUBLIC ROUTES

  {
    path: "/recuperar-senha",
    element: <RecoverPassword />,
  },

  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  { path: "/cadastro", element: <h1>Register</h1> },
  {
    path: "/logout",
    element: <LogoutPage />,
  },
]);

export default Router;
