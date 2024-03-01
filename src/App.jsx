
import { RouterProvider } from "react-router-dom";
import './App.css'
import router from "./routes";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state.theme);
  const theme = createTheme(state);
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>

  )
}

export default App
