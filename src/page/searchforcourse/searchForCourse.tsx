import React from "react";
import SearchForListCourse from "../../components/SearchForListCourses/searchforlistcourses";
import { useEffect } from "react";
import Axios from "axios";
function SearchForCourse() {
  const [listCourses, setListCourse] = React.useState([]);
  useEffect(() => {
    Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
      .then((res: any) => {
        console.log(res.data);

        setListCourse(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  return (
    <React.Fragment>
      <SearchForListCourse listCourses={listCourses} />
    </React.Fragment>
  );
}

export default SearchForCourse;
