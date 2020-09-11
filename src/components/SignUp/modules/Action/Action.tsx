import Axios from 'axios';
import Swal from 'sweetalert2';
import * as ActionType from "../Constant/Constants"
interface Data {
    taiKhoan: string,
    matKhau: string,
    hoTen: string,
    soDT: string,
    maNhom: string,
    email: string,
}
export const actSignUpAPI = (data: Data) => {
    const newData: Data = { ...data, maNhom: "GP01" }
    // console.log(newData);
    return (dispatch: any) => {
        Axios({
            method: "POST",
            url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: newData,
        })
            .then((res: any) => {
                Swal.fire("Sign Up Success!!!", "Click OK to return Home", "success");
                dispatch(actSignUp(res.data));
            })
            .catch((err: any) => {
                Swal.fire("Fail to SignUp ", err.response.data, "error");
            })
    }
}
export const actSignUp = (user: any) => {
    return {
        type: ActionType.SIGN_UP,
        data: user
    }
}







