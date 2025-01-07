import { Google } from '@mui/icons-material';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';

export const LoginPage = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4,
      }}
    >
      <Grid2
        className='box-shadow'
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
        size={{ xs: 6, md: 3 }}
      >
        <Typography variant='h5' sx={{ mb: 1 }}>
          Login
        </Typography>
        <form>
          <Grid2 container direction={'column'} spacing={2} size={{ xs: 12 }}>
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
                  Login
                </Button>
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <Button variant='contained' fullWidth>
                  <Google></Google>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid2>
            </Grid2>
            <Grid2 container direction={'row'} justifyContent={'end'}>
              <Link component={RouterLink} to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid2>
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  );
};
