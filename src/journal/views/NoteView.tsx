import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid2, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components/ImageGallery';

export const NoteView = () => {
  return (
    <>
      <Grid2
        container
        display={'flex'}
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ mb: 1 }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Typography fontSize={39} fontWeight={'light'}>
            28 de agosto, 2023
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Button color='primary' sx={{ padding: 2 }}>
            <SaveOutlined sx={{ mr: 1, fontSize: 30 }}></SaveOutlined>
            Guardar
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un título'
          label='Título'
          sx={{ border: 'none', mb: 1 }}
        ></TextField>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Qué sucedió en el día de hoy?'
          sx={{ border: 'none', mb: 1 }}
          minRows={5}
        ></TextField>
      </Grid2>
      {/* Image gallery */}
      <ImageGallery></ImageGallery>
    </>
  );
};
