import { Grid2, Typography } from '@mui/material';

export const AuthLayout = ({
  children,
  title = '',
}: {
  children: React.ReactNode;
  title?: string;
}) => {
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
          {title}
        </Typography>
        {children}
      </Grid2>
    </Grid2>
  );
};
