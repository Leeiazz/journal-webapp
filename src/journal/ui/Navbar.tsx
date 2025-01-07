import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material';

export const Navbar = ({ drawerWidth }: { drawerWidth: number }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: {
          sm: `calc(100% - ${drawerWidth}px)`,
        },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          sx={{
            mr: 2,
            display: { sm: 'none' },
          }}
        >
          <MenuOutlined></MenuOutlined>
        </IconButton>
        <Grid2
          container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography variant='h6' noWrap component={'div'}>
            JournalApp
          </Typography>
          <IconButton color='error'>
            <LogoutOutlined></LogoutOutlined>
          </IconButton>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};
