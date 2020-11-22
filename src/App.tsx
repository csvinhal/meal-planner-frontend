import Loading from '@components/Loading/Loading'
import Toast from '@components/Toast/Toast'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { LoaderProvider } from '@providers/Loader'
import { ToastProvider } from '@providers/Toast'
import React from 'react'
import './App.scss'
import Router from './routes'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <LoaderProvider>
          <Toast />
          <Loading />
          <CssBaseline />
          <div className="App">
            <Router />
          </div>
        </LoaderProvider>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
