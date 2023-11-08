import {AppRouter} from "./router/app-router.tsx";
import {RouterProvider} from "react-router-dom";

export const JournalApp = () => {
    return (
        <RouterProvider router={AppRouter}></RouterProvider>
    )
}


