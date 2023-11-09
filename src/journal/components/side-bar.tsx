import {
    Box,
    Divider,
    Drawer,
    Grid,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {List, TurnedInNot} from "@mui/icons-material";

export const SideBar = ({drawerWidth = 240}) => {
    return (
        <Box component='nav'
             sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
        >
            <Drawer
                variant='permanent'
                open
                sx={
                    {
                        display: {xs: 'block'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}

                    }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>Santiago Yacelga</Typography>
                </Toolbar>
                <Divider></Divider>
                <List>
                    {
                        ['Enero', 'Febrero', 'Abril', 'Mayo',].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot></TurnedInNot>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'text....'}/>

                                    </Grid>

                                </ListItemButton>


                            </ListItem>

                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}
