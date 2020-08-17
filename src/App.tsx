import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../src/theme/test.css"
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/carousel";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
function App() {
  const [darkMode, setDarkMode] = React.useState(false);
 const darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });
 const lightTheme = createMuiTheme({
    palette: {
      type: "light"
    }
});
  const setBackground = (value: boolean) => {
     setDarkMode(value)
  }
  
  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar setBackground={setBackground} />
      </ThemeProvider>

      {/* <Carousel /> */}
    </div>
  );
}

export default App;
