import Axios from "axios";
import Swal from 'sweetalert2'
import * as ActionType from "../Contants/Contants"
interface Data{
  taiKhoan: string, 
  matKhau: string,
  errorInput: string
}


export const actSignInAPI =  (data: Data) => {
  console.log(data);
  return async (dispatch: any) => {
    try {
      const res = await Axios({
        method: "POST",
        url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data
      })
      Swal.fire("Sign In Success !", "Click OK to exit!", "success");
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data))
      dispatch(actSignIn(res.data))
  } catch (error) {
      console.log(error);
      Swal.fire("Sign In Fail!", error.response.data, "error");
  }
  }
}

export const actSignIn =  (user: any) => {
  console.log(user);
  
  return {
     type: ActionType.signIn,
     data: user
  }
}