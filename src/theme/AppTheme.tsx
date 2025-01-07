import { CssBaseline, ThemeProvider } from '@mui/material';
import { purpleTheme } from './purpleTheme';

export const AppTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline></CssBaseline>
      {children}
    </ThemeProvider>
  );
};
