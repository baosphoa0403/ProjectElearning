export interface Test {
  arr1: { name: String; age: number }[];
}

// export interface RootState {}

export interface SignIn {
  user: { hoTen: String };
}
export interface Home {
  listCourses: [];
}
export interface SignUps {
  user: {};
}
export interface DetailCourse {
  detailCourse: {};
}
export interface CourseFromCard {
  quantity: 0;
  ArrContainCourseAndQuantity: [
    {
      Course: {
        maKhoaHoc: any;
        biDanh: any;
        tenKhoaHoc: any;
        moTa: any;
        luotXem: any;
        hinhAnh: any;
        maNhom: any;
        ngayTao: any;
        soLuongHocVien: any;
        nguoiTao: {
          taiKhoan: any;
          hoTen: any;
          maLoaiNguoiDung: any;
          tenLoaiNguoiDung: any;
        };
        danhMucKhoaHoc: {
          maDanhMucKhoahoc: any;
          tenDanhMucKhoaHoc: any;
        };
      };
      quantityForCourse: 0;
    }
  ];
}
export interface Course {
  Course: {
    maKhoaHoc: any;
    biDanh: any;
    tenKhoaHoc: any;
    moTa: any;
    luotXem: any;
    hinhAnh: any;
    maNhom: any;
    ngayTao: any;
    soLuongHocVien: any;
    nguoiTao: {
      taiKhoan: any;
      hoTen: any;
      maLoaiNguoiDung: any;
      tenLoaiNguoiDung: any;
    };
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: any;
      tenDanhMucKhoaHoc: any;
    };
  };
  quantityForCourse: 0;
  type: any;
}
