import { StarOutline } from '@mui/icons-material';
import { Grid2, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid2
      container
      spacing={0}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'calc(100vh - 180px)',
        backgroundColor: 'primary.main',
        padding: 4,
        borderRadius: 3,
      }}
      size={{ xs: 12 }}
      width={'100%'}
      height={'100%'}
    >
      <StarOutline style={{ fontSize: 100, color: 'white' }}></StarOutline>
      <Typography color='white' variant='h5'>
        Selecciona o crea una entrada
      </Typography>
    </Grid2>
  );
};
