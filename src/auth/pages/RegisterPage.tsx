import { Button, Grid2, Link, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid2 container direction={'column'} spacing={2} size={{ xs: 12 }}>
          <Grid2>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder='John Doe'
              fullWidth
            ></TextField>
          </Grid2>
          <Grid2>
            <TextField
              label='Email'
              type='email'
              placeholder='correo@correo.com'
              fullWidth
            ></TextField>
          </Grid2>
          <Grid2>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='*********'
              fullWidth
            ></TextField>
          </Grid2>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12 }}>
              <Button variant='contained' fullWidth>
                Crear cuenta
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 container direction={'row'} justifyContent={'end'}>
            <Link component={RouterLink} to='/auth/login'>
              ¿Tienes una cuenta? Inicia sesión
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
