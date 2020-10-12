import React, { useEffect } from "react";
import MaterialTable from "material-table"
import Axios from "axios";
import Swal from "sweetalert2";
export default function TableUser() {
  const { useState } = React;
  const [dataStore, setDataStore] = useState({
    data: [],
  });


  useEffect(() => {
    Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01",
    })
      .then((rs) => {
        console.log(rs.data);
        setDataStore((prevState) => {
          return { ...prevState, data: rs.data };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleADDUser = (user: any) => {
    let userLocal: any = localStorage.getItem("userAdmin");
    if (userLocal) {
      var userAdmin = JSON.parse(userLocal);

    }
    const userADD = { ...user, maNhom: "GP01" };

    if (
      user.maLoaiNguoiDung !== "HV" &&
      user.maLoaiNguoiDung !== "GV"
    ) {
      console.log("sai ma loai ng dùng");
    } else {
      Axios({
        method: "POST",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        data: userADD,
        headers: {
          Authorization: `Bearer ${userAdmin.accessToken}`,
        },
      })
        .then((rs) => {
          Swal.fire("Tạo tài khoản thành công!", "Nhấn OK để thoát!", "success");

        })
        .catch((error) => {
          Swal.fire(
            "Tạo tài khoản không thành công !",
            error.response.data,
            "error"
          );
        });
    }
  }

  const handleEDITUser = (user: any) => {
    let userLocal: any = localStorage.getItem("userAdmin");
    if (userLocal) {
      var userAdmin = JSON.parse(userLocal);

    }
    const userEDIT = { ...user, maNhom: "GP01" };

    if (
      user.maLoaiNguoiDung !== "HV" &&
      user.maLoaiNguoiDung !== "GV"
    ) {
      console.log("sai ma loai ng dùng");
    } else {
      Axios({
        method: "PUT",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        data: userEDIT,
        headers: {
          Authorization: `Bearer ${userAdmin.accessToken}`,
        },
      })
        .then((rs) => {
          Swal.fire("Sửa tài khoản thành công!", "Nhấn OK để thoát!", "success");

        })
        .catch((error) => {
          Swal.fire(
            "Sửa tài khoản không thành công !",
            error.response.data,
            "error"
          );
        });
    }
  }

  const handleDELETEUser = (user: any) => {
    let userLocal: any = localStorage.getItem("userAdmin");
    if (userLocal) {
      var userAdmin = JSON.parse(userLocal);
    }
    Axios({
      method: "DELETE",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`,
      },
    })
      .then((rs) => {
        Swal.fire("Xoá tài khoản thành công!", "Nhấn OK để thoát!", "success");
      })
      .catch((error) => {
        Swal.fire(
          "Xoá tài khoản không thành công !",
          error.response.data,
          "error"
        );
      });
  };
  return (
    <React.Fragment>
      <MaterialTable
        title="Dashboard User"
        options={{
          pageSize: 10,
          pageSizeOptions: [10, 15, 20, 25],
          emptyRowsWhenPaging: false,
        }}
        columns={[
          { title: "Tài Khoản", field: "taiKhoan", disableClick: true },
          { title: "Mật Khẩu", field: "matKhau" },
          { title: "Họ Tên", field: "hoTen" },
          { title: "Số ĐT", field: "soDt" },
          { title: "Mã loại người dùng", field: "maLoaiNguoiDung" },
          { title: "Email", field: "email", type: "string" },
        ]}
        data={dataStore.data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve) => {
              setTimeout(() => {
                handleADDUser(newData);
                resolve();
                setDataStore((prevState: any) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                handleEDITUser(newData);
                if (oldData) {
                  setDataStore((prevState: any) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 1000);
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
                handleDELETEUser(oldData);
                setDataStore((prevState: any) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
      />
    </React.Fragment>
  );
}
