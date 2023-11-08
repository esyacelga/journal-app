import {createBrowserRouter} from "react-router-dom";

export const AppRouter = createBrowserRouter([
    {
        path: '/auth/*',
        element: '<AuthRoutes></AuthRoutes>'
    },
    {
        path: '/*',
        element: '<JournalRoutes></JournalRoutes>'
    },
]);