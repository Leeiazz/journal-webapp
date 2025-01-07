import { Box } from '@mui/material';
import { Navbar } from '../ui/Navbar';
const drawerWidth = 240;
export const JournalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* NAVBAR */}
      <Navbar drawerWidth={drawerWidth}></Navbar>
      {/* SiDEBAR */}
      <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
        {/* TOOLBAR */}
        {children}
      </Box>
    </Box>
  );
};
