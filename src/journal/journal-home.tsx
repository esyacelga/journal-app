import {RouterProvider} from "react-router-dom";
import {JournalRoutes} from "./routes/journal-routes.tsx";

export const JournalHome = () => {
    return (
        <RouterProvider router={JournalRoutes}></RouterProvider>
    )
}