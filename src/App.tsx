import React from "react";
import "./App.css";
import Carousel from "./components/carousel/carousel";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import IntroduceStep from "./components/IntroduceStep/IntroduceStep";
import 'font-awesome/css/font-awesome.min.css';
import Navbar from "./components/Navbar/Navbar";
import Achievements from "./components/Achievements/Achievements";
import Instructors from "./components/Instructors/Instructors";
import Footer from "./components/Footer/footer";
import "font-awesome/css/font-awesome.min.css";
import CourseInfor from "./components/courseInfor/courseInfor";
import IntroduceCourse from "./components/IntroduceCourse/IntroduceCourse";
import IntroduceTarget from "./components/IntroduceTarget/IntroduceTarget";

import ListCourses from "./components/ListCourses/listCourses";
import SearchForListCourse from "./components/SearchForListCourses/searchforlistcourses";
import TabPanel from "./components/InforUsers/listInfor"
import Test from "./components/Test/Test";

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
        {/* <CssBaseline />
        <Navbar setBackground={setBackground} />
        <Carousel />
        <CourseInfor />
        <IntroduceStep />
        <ListCourses /> */}
        <Navbar setBackground={setBackground} />
        {/* <SearchForListCourse />
        <IntroduceTarget />
        <IntroduceCourse />
        <ListCourses />
        <Instructors />
        <Achievements />
        <Footer /> */}
        <Test />
        <TabPanel />
           
      </ThemeProvider>

      {/* <Carousel /> */}
    </div>
  );
}

export default App;
