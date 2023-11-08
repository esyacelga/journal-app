import {ThemeProvider} from "@emotion/react";
import {CssBaseline} from "@mui/material";
import {purpleTheme} from "./purple.ts";

export const AppTheme = ({children}: never) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )


}