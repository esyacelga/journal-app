import {createBrowserRouter, Navigate} from "react-router-dom";
import {JournalPage} from "../pages/journal-page.tsx";

export const JournalRoutes = createBrowserRouter([
    {
        path: '/',
        element: <JournalPage></JournalPage>
    },
    {
        path: '/*',
        element: <Navigate to="/"></Navigate>
    }

]);