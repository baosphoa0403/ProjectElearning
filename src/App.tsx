import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../src/theme/test.css"
import Navbar from "../src/components/Navbar/index";
import Carousel from "./components/carousel";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toggle from "react-toggle";
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { makeStyles } from '@material-ui/core/styles';
// import Navbar from "../src/components/Navbar/index"
// import Carousel from './components/carousel';
import SignUp from "./components/SignUp/SignUp";
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
  const useStyles = makeStyles({
    root: {
      margin: "-6px -6px",
      color: darkMode ? "" : "#ff9800"
    },
  });
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar />
        <label>
          <Toggle
            defaultChecked={darkMode}
            icons={{
              checked: <Brightness3Icon className={classes.root}/>,
              unchecked: <WbSunnyRoundedIcon className={classes.root} />
            }}
            onChange={() => {
              setDarkMode(!darkMode);
            }}
          />
        </label>
        <SignUp />
      </ThemeProvider>

      {/* <Carousel /> */}

    </div>
  );
}

export default App;
