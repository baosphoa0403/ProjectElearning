import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/carousel/carousel";
import CourseInfor from "../../components/courseInfor/courseInfor";
import IntroduceStep from "../../components/IntroduceStep/IntroduceStep";
import ListCourses from "../../components/ListCourses/listCourses";
import IntroduceTarget from "../../components/IntroduceTarget/IntroduceTarget";
import IntroduceCourse from "../../components/IntroduceCourse/IntroduceCourse";
import Instructors from "../../components/Instructors/Instructors";
import Achievements from "../../components/Achievements/Achievements";
import { ThemeProvider } from "@material-ui/core/styles";
import Footer from "../../components/Footer/footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";
import { rootState } from "../../../src/redux/reducers/Reducers";
import { useEffect } from "react";
import * as action from "./module/actions/action";
import {darkTheme, lightTheme} from "../../theme/theme"
import {Switch} from "../../components/Interface/Interface";
function HomePage(props: any|Switch) {
  useEffect(() => {
    props.getListCourses();
  }, []);


  return (
    <React.Fragment>
      <ThemeProvider theme={props.darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar darkMode={props.darkMode} props={props} />
        <Carousel darkMode={props.darkMode} />
        <CourseInfor darkMode={props.darkMode}/>
        <IntroduceStep darkMode={props.darkMode}/>
        <IntroduceTarget />
        <ListCourses listCourses={props.newListCourses} />
        <IntroduceCourse  />
        <Instructors darkMode={props.darkMode}/>
        <Achievements />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
const mapStateToProps = (state: rootState) => {
  return {
    newListCourses: state.reducerHome.listCourses,
    user: state.SignInReducer.user,
    darkMode: state.reducerSwitch.darkMode
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getListCourses: () => {
      dispatch(action.funGetListCoureseAPI());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
