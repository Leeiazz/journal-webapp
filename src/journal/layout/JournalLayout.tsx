import { Box, Toolbar } from '@mui/material';
import { Navbar } from '../ui/Navbar';
import { Sidebar } from '../ui/Sidebar';
const drawerWidth = 280;
export const JournalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* NAVBAR */}
      <Navbar drawerWidth={drawerWidth}></Navbar>
      {/* SiDEBAR */}
      <Sidebar drawerWidth={drawerWidth}></Sidebar>
      <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
        {/* TOOLBAR */}
        <Toolbar></Toolbar>
        {children}
      </Box>
    </Box>
  );
};
