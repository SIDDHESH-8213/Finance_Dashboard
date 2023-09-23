import {createTheme} from "@mui/material/styles"
import {useMemo} from "react"
import {themeSettings} from "./theme"
import {CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Box} from "@mui/material"
import Navbar from "./pages/Navbar"
import Dashboard from "./pages/dashboard"

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div className="app">
      <BrowserRouter >
        <ThemeProvider theme={theme}>
        <CssBaseline />

          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/predictions" element={<h1>Predictions</h1>} />
            </Routes>
          </Box>

        </ThemeProvider>
      </BrowserRouter>
      
    </div>
  )
}

export default App