import { Box } from '@mui/material';

export const JournalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* NAVBAR */}
      {/* SiDEBAR */}
      <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
        {/* TOOLBAR */}
        {children}
      </Box>
    </Box>
  );
};
