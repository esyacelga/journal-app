import {AppRouter} from "./router/app-router.tsx";
import {RouterProvider} from "react-router-dom";
import {AppTheme} from "./theme";

export const JournalApp = () => {
    return (
        <AppTheme>
            <RouterProvider router={AppRouter}></RouterProvider>
        </AppTheme>
    )
}


