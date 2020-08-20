import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/carousel/carousel";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
    },
  });
  const setBackground = (value: boolean) => {
    setDarkMode(value);
  };

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar setBackground={setBackground} />
        <Carousel />
      </ThemeProvider>
    </div>
  );
}

export default App;
