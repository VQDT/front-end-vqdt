import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/App.Layout";
import Protect from "./layout/Protect.Layout";
import TestLayout from "./layout/Test.Layout";
import AboutTest from "./pages/AboutTest/AboutTest.page";
import ApplicatorTestPainel from "./pages/Applicator/ApplicatorPainel.page";
import ApplicatorTestPage from "./pages/Applicator/ApplicatorTest.page";
import CourseAttendancePage from "./pages/Applicator/CourseAttendancePage";
import Preparatory from "./pages/Applicator/PreparatoryPage";
import Login from "./pages/Auth/Login.page";
import RecoverPassword from "./pages/Auth/RecoverPassword.page";
import CandidateResult from "./pages/Candidate/CandidateResult.page";
import IntroductionTestPage from "./pages/Candidate/IntroductionTest.page";
import Test from "./pages/Candidate/Test.page";
import TestPainel from "./pages/Candidate/TestPainel.page";
import QuestionForm from "./pages/Elaborator/QuestionForm.page";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import LogoutPage from "./pages/Logout/LogoutPage";
import CreatorPanel from "./pages/Elaborator/ElaboratorPanel.page";
import ReviewerPanel from "./pages/Review/ReviewerPanel.page";
import { ReviewQuestion } from "./pages/Review/ReviewQuestion.page";
import QuestionPage from "./pages/Elaborator/QuestionPage";
import { EditQuestionPage } from "./pages/Elaborator/EditQuestionPage";

export const Router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            // APPLICATOR ROUTES

            {
                element: <Protect permittedRoles={["APPLICATOR", "ADMIN"]} />,
                children: [
                    { path: "/aplicador", element: <ApplicatorTestPainel /> },
                    { path: "/preparatorio", element: <Preparatory /> },
                    {
                        path: "/dia-de-curso/:id",
                        element: <CourseAttendancePage />,
                    },
                    { path: "/aplicacao/:id", element: <ApplicatorTestPage /> },
                ],
            },

            // CANDIDATE ROUTES

            {
                element: <Protect permittedRoles={["CANDIDATE", "ADMIN"]} />,
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
                element: <Protect permittedRoles={["REVIEWER", "ADMIN"]} />,
                children: [
                    {
                        path: "/painel-de-revisor",
                        element: <ReviewerPanel />,
                    },
                    {
                        path: "/revisar-questao",
                        element: <ReviewQuestion />,
                    },
                ],
            },

            // // SUPERVISOR ROUTES

            // {
            //   element: <Protect permittedRoles={["supervisor"]} />,
            //   children: [],
            // },

            // ELABORATOR ROUTES

            {
                element: <Protect permittedRoles={["ELABORATOR", "ADMIN"]} />,
                children: [
                    {
                        path: "/criar-questao",
                        element: <QuestionForm />,
                    },
                    {
                        path: "/painel-de-elaborador",
                        element: <CreatorPanel />,
                    },
                    {
                        path: "/questao/:id",
                        element: <QuestionPage />,
                    },
                    {
                        path: "/questao/:id/edit",
                        element: <EditQuestionPage />,
                    },
                ],
            },

            // // ADMIN ROUTES

            // {
            //   element: <Protect permittedRoles={["admin"]} />,
            //   children: [],
            // },
        ],
    },

    {
        element: <Protect permittedRoles={["CANDIDATE", "ADMIN"]} />,
        children: [
            {
                path: "/prova",
                element: <TestLayout />,
                children: [{ path: "/prova/:id", element: <Test /> }],
            },
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
    {
        path: "/cadastro",
        element: <h1>Register</h1>,
    },
    {
        path: "/logout",
        element: <LogoutPage />,
    },
]);

export default Router;
