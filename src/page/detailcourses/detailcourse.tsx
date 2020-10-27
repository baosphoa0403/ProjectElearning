import { connect } from "react-redux";
import React from "react";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import { rootState } from "../../redux/reducers/Reducers";
import {darkTheme, lightTheme} from "../../theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from "../../components/Navbar/Navbar";
import {Switch} from "../../components/Interface/Interface";
function DetailCourse(props: any) {
  // console.log(props.arrContainCourseAndQuantity);

  return (
    <React.Fragment>
       <ThemeProvider theme={props.darkMode ? darkTheme : lightTheme}>
         <CssBaseline/>
         <Navbar darkMode={props.darkMode} props={props} />
         <CourseDetail  />
       </ThemeProvider>
    </React.Fragment>
  );
}

const mapStateToProps = (state: rootState) => {
  return {
    arrContainCourseAndQuantity: state.cardReducer.ArrContainCourseAndQuantity,
    darkMode: state.reducerSwitch.darkMode
  };
};
export default connect(mapStateToProps, null)(DetailCourse);
