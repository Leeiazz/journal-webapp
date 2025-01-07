import { TurnedInNot } from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

export const Sidebar = ({ drawerWidth }: { drawerWidth: number }) => {
  return (
    <Box
      component={'nav'}
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap>
            Gonzalo Donaire
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].map(
            (text, index) => (
              <ListItem key={text + index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot></TurnedInNot>
                  </ListItemIcon>
                  <Grid2 container>
                    <ListItemText primary={text}></ListItemText>
                    <ListItemText
                      secondary={'Lorem ipsum dolor sit amet'}
                    ></ListItemText>
                  </Grid2>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
};
