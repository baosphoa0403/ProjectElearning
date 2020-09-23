import Axios from "axios";

export const loginAdmin = (data: any, history: any) => {
    console.log(data);
    
     return async (dispatch: any) => {
        try {
            const res = await Axios({
                method: "POST",
                url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                data
            })
           if (res.data.maLoaiNguoiDung === "GV") {
               localStorage.setItem("hello", JSON.stringify(res.data))
               history.push("/admin/dashboard")
           }else{
               alert("bạn ko có quyền đăng nhập")
           }
                    
        } catch (error) {
            console.log(error);
            
        }
     }
}



