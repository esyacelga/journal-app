import {createBrowserRouter, Navigate} from "react-router-dom";
import {LoginPage, RegisterPage} from "../pages";

export const AuthRoutes = createBrowserRouter([
    {
        path: 'login',
        element: <LoginPage></LoginPage>
    },
    {
        path: 'register',
        element: <RegisterPage></RegisterPage>
    },
    {
        path: '/*',
        element: <Navigate to="/auth/login" ></Navigate>
    }

]);