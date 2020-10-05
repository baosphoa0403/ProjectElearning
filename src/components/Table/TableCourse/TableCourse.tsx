import React from "react";
import MaterialTable, { Column } from "material-table"
import {connect} from "react-redux";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import Swal from 'sweetalert2'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { async } from "q";
const useStyles = makeStyles(theme => ({
  datePicker: {
  width: 150
  }
}));
interface Course {
  biDanh: String,
  hinhAnh: String,
  luotXem: Number,
  maKhoaHoc: String,
  maNhom: String,
  moTa: String,
  ngayTao: String,

}
export default function TableCourse() {
    const [change, setChange] = React.useState(false)
    const { useState } = React;  
    const classes = useStyles();
    const [dataStore, setDataStore] = useState({
        columns: [
            {
                 title: "ID Course",
                 field: "maKhoaHoc"
            },
            {
                title: "Name Course",
                field: "tenKhoaHoc"
            },
            {
                title: "Img",
                editComponent: (props: any) => (
                  <input
                    type="file"
                    onChange={(e: any) => props.onChange(e.target.files[0])}
                  />
                ),
                field: "hinhAnh",
                render: (hinhAnh: any) => (
                    <img src={hinhAnh.hinhAnh} style={{ width: 100, height: 100 }} />
                )
            },
            {
                title: "Date",
                field: "ngayTao",
                editComponent: (props: any) => (
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className={classes.datePicker}
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date"
                    value={props.value ? props.value : new Date()}
                    onChange={(date)=>{
                       props.onChange(date)
                    }}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
                )

                
                
            },
            {
                title: "Description",
                field: "moTa"
            },
            {
                title: "User See",
                field: "luotXem"
            }, 
        ],
        data: []
    });
    React.useEffect(() => {
        Axios({
          method: "GET",
          url:
            "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
        })
          .then((res: any) => {
            console.log(res.data);
    
            setDataStore(prevState => {
                return {...prevState, data: res.data}
            });
          })
          .catch((err: any) => {
            console.log(err);
          });
      }, []);
     React.useEffect(()=>{
        Axios({
          method: "GET",
          url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
        })
        .then((rs)=>{
          setDataStore(prevState => {
              return { ...prevState, data: rs.data };
            });
          })
          .catch(err => {
            console.log(err);
          });
      }, [change])
    let handleAddCourse = (course: any) => {
        // console.log(course);
        let moment = require('moment');
        var form_data = new FormData();
        let ngayTao = moment(course.ngayTao).format("DD/MM/YYYY");
        let maDanhMucKhoaHoc = course.maKhoaHoc.slice(0, course.maKhoaHoc.indexOf("_"));
        const localAdmin: any = localStorage.getItem("userAdmin");
        const userAdmin = JSON.parse(localAdmin);
        let courseAdd = {
          ...course,
          maNhom: "GP01", 
          danhGia: 0,
          ngayTao: ngayTao,
          biDanh: course.tenKhoaHoc,
          luotXem: 0,
          maDanhMucKhoaHoc: maDanhMucKhoaHoc,
          taiKhoanNguoiTao: userAdmin.taiKhoan
        }
        for (const key in courseAdd) {
          console.log(key, courseAdd[key]);
          form_data.append(key, courseAdd[key]);
        }
        console.log(courseAdd);
        
        // let res = async () => {
        //   let data1 = await Axios({
        //     method: "POST",
        //     url:
        //       "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",
        //     // "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim",
        //     // data: form_data,
        //     data: courseAdd,
        //     headers: {
        //       Authorization: `Bearer ${userAdmin.accessToken}`
        //     }
            
        //   })
        //   let data2 = await Axios({
        //     method: "POST",
        //     url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
        //     data: data1
        //   })
        //   console.log(data1.data);
        //   return data2.data
        // }
        // res()
       
        Axios({
          method: "POST",
          url:
            "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",
          // "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim",
          // data: form_data,
          data: courseAdd,
          headers: {
            Authorization: `Bearer ${userAdmin.accessToken}`
          }
          
        }).then(rs => {
          console.log(rs.data);
          
          // setChange(!change)
          Swal.fire("Add Course success !", "Press OK exit!", "success");
        })
        .catch(error => {
          console.log(error.response);
          
          Swal.fire("Add Course fail !",  error.response.data, "error");
        });
     }
     let handleDeleteMovie = (course: any) => {
          console.log(course);
          const localAdmin: any = localStorage.getItem("userAdmin");
          const userAdmin = JSON.parse(localAdmin);
          Axios({
            method: "DELETE",
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${course.maKhoaHoc}`,
            data: course.maKhoaHoc,
            headers: {
              Authorization: `Bearer ${userAdmin.accessToken}`
            }
          })
          .then(rs => {
            console.log(rs.data);
            
            // setChange(!change)
            Swal.fire("Delete Course success !", "Press OK exit!", "success");
          })
          .catch(error => {
            console.log(error.response);
            
            Swal.fire("Delete Course fail !",  error.response.data, "error");
          });
     }
  
  return (
    <React.Fragment>
      <MaterialTable
        title="Editable Preview"
        columns={dataStore.columns}
        data={dataStore.data}
        editable={{
          onRowAdd: (newData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
                handleAddCourse(newData)
                // setDataStore({...dataStore, newData});
                setDataStore(prevState => {
                  const data: any = [...prevState.data];
                  data.push(newData);

                  return { ...prevState, data };
                });
                
              }, 1000);
            }),
          onRowUpdate: (newData, oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = {...dataStore};
                const index = oldData.tableData.id;
                // dataUpdate[index] = newData;
                // setDataStore([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // const dataDelete = [...dataStore];
                // const index = oldData.tableData.id;
                // dataDelete.splice(index, 1);
                // setDataStore([...dataDelete]);
                
                resolve();
                handleDeleteMovie(oldData);
                setDataStore(prevState => {
                  const data = [...prevState.data];
                  const index = data.findIndex(data => data === oldData);
                  data.splice(index, 1);
                  return { ...prevState, data };
                });
              }, 1000);
            })
        }}
      />
    </React.Fragment>
  );
}

