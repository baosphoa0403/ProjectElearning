import React from "react";
import SearchForListCourse from "../../components/SearchForListCourses/searchforlistcourses";
import { useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { rootState } from "../../redux/reducers/Reducers";

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
  return (
    <React.Fragment>
      <SearchForListCourse
        listCourses={listCourses}
        arrContainCourseAndQuantity={props.arrContainCourseAndQuantity}
      />
    </React.Fragment>
  );
}
const mapStateToProps = (state: rootState) => {
  return {
    arrContainCourseAndQuantity: state.cardReducer.ArrContainCourseAndQuantity,
  };
};
export default connect(mapStateToProps, null)(SearchForCourse);
