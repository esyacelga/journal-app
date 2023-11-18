import {Link as RouterLink} from 'react-router-dom';
import {Button, Grid, Link, TextField, Typography} from '@mui/material';
import {AuthLayout} from '../layout/AuthLayout';
import {useForms} from "../../hooks";

const formData = {
    email: 'esyacelga@hotmail.com',
    password: '123456',
    displayName: 'Santiago Yacelga'

}
export const RegisterPage = () => {
    const {displayName, email, password, onInputChange, formState} = useForms({
        email: 'esyacelga@hotmail.com',
        password: '123456'
    });

    const onSubmit = (evento) => {
        evento.preventDefault();
        console.log(formState);
    }


    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={onSubmit}>
                <Grid container>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder='Nombre completo'
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}

                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12}>
                            <Button type="submit" variant='contained' fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>


                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to="/auth/login">
                            ingresar
                        </Link>
                    </Grid>

                </Grid>


            </form>

        </AuthLayout>
    )
}
