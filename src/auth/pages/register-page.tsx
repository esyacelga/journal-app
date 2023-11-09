import {AuthLayout} from "../layout/AuthLayout.tsx";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

export const RegisterPage = () => {
    return (
        <AuthLayout title="Crear Cuenta.    ">
            <form>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{mt: 2}}>
                        <TextField label="Nombre Completo"
                                   type="text"
                                   placeholder="Jhon Doe"
                                   fullWidth
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{mt: 2}}>
                        <TextField label="Email"
                                   type="email"
                                   placeholder="cooreo@google.com"
                                   fullWidth
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{mt: 2}}>
                        <TextField label="Password"
                                   type="password"
                                   placeholder="************"
                                   fullWidth
                        ></TextField>
                    </Grid>

                </Grid>
                <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                    <Grid item xs={12} sm={6}>
                        <Button variant='contained' fullWidth>
                            Login
                        </Button>

                    </Grid>

                    <Grid container direction="row" justifyContent='end'>
                        <Typography sx={{mr: 1}}>Ya tienes una cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to="/auth/login">
                            Ingresar
                        </Link>

                    </Grid>
                </Grid>
            </form>

        </AuthLayout>


    )
}