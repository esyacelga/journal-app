import {Box} from "@mui/material";
import {NavBar, SideBar} from "../components/index.js.ts";


const drawerWidth = 240;
// @ts-ignore
export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display: 'flex'}}>
            <NavBar drawerWidth={drawerWidth}/>
            <SideBar drawerWidth={drawerWidth}></SideBar>

            <Box component='main'
                 sx={{flexGrow: 1, p: 3}}
            >

                {children}
            </Box>

        </Box>
    )
}