import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import "./App.scss";
import Dialog from "@components/DeleteDialog/DeleteDialog";
import Loading from "./components/Loading/Loading";
import Toast from "./components/Toast/Toast";
import Router from "./routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Loading />
      <Toast />
      <Dialog />
      <div className="App">
        <Router></Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
