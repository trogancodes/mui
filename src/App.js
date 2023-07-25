import { Box, Stack, createTheme } from '@mui/material';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { useState } from 'react';
import { dark, light } from '@mui/material/styles/createPalette';
import { Palette } from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';

function App() {
  const [mode, setMode] = useState(light);
  const darkTheme = createTheme({
    Palette: { mode: mode },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={'background.default'}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
