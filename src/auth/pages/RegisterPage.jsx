import {Link as RouterLink} from 'react-router-dom';
import {Button, Grid, Link, TextField, Typography} from '@mui/material';
import {AuthLayout} from '../layout/AuthLayout';
import {useForms} from "../../hooks";

const formData = {
    email: 'esyacelga@hotmail.com',
    password: '123456',
    displayName: 'Santiago Yacelga'

}
const formValidations ={
    email:[(value)=>value.includes('@'), 'El correo no es correcto'],
    password:[(value)=>value.length>=6, 'El pass debe tener mas de 6 letras'],
    displayName:[(value)=>value.length>=1, 'El nombre es obligatorio'],
}
export const RegisterPage = () => {
    const {displayName, email, password, onInputChange, formState} = useForms(formData
        , formValidations);

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
                            error
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
