import React from "react";
import SearchForListCourse from "../../components/SearchForListCourses/searchforlistcourses";
import { useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { rootState } from "../../redux/reducers/Reducers";
import * as action from "../../components/SearchForListCourses/moduleSeartchForCard/actions/action";
function SearchForCourse(props: any) {
  const [listCourses, setListCourse] = React.useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
      .then((res: any) => {
        setListCourse(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  // useEffect(() => {
  //   console.log(props.arrContainCourseAndQuantity);
  // }, [props.arrContainCourseAndQuantity]);
  const handleIncreaseCourse = (course: any) => {
    props.increaseCourse(course);
  };
  return (
    <React.Fragment>
      <SearchForListCourse
        listCourses={listCourses}
        arrContainCourseAndQuantity={props.arrContainCourseAndQuantity}
        allQuantity={props.allQuantity}
        handleIncreaseCourse={handleIncreaseCourse}
      />
    </React.Fragment>
  );
}
const mapStateToProps = (state: rootState) => {
  return {
    arrContainCourseAndQuantity: state.cardReducer.ArrContainCourseAndQuantity,
    allQuantity: state.cardReducer.quantity,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    increaseCourse: (course: any) => {
      dispatch(action.actIncreaseCourses(course));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchForCourse);
