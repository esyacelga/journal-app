import {createBrowserRouter} from "react-router-dom";
import {LoginPage, RegisterPage} from "../auth/pages";
import {JournalPage} from "../journal/pages/journal-page.tsx";

export const AppRouter = createBrowserRouter([
    {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/auth/register',
        element: <RegisterPage></RegisterPage>
    },
    {
        path: '/*',
        element: <JournalPage></JournalPage>
    }
]);