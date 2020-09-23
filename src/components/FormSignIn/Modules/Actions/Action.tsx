import Axios from "axios";
import Swal from 'sweetalert2'
import * as ActionType from "../Contants/Contants"
interface Data {
  taiKhoan: string,
  matKhau: string,
  errorInput: string,
}
export const actSignInAPI = (data: Data, history: any) => {
  console.log(data);
  
  return async (dispatch: any) => {
    try {
      const res = await Axios({
        method: "POST",
        url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data
      })
      let matKhau: any = data.matKhau;
      let allData: Data = { ...res.data, matKhau };

      Swal.fire("Sign In Success !", "Click OK to exit!", "success");
      localStorage.setItem("user", JSON.stringify(allData))
      dispatch(actSignIn(allData))
      history.push("/")
    } catch (error) {
      Swal.fire("Sign In Fail!", error.response.allData, "error");
    }
  }
}
export const actSignIn = (user: any) => {
  return {
    type: ActionType.signIn,
    data: user
  }
}