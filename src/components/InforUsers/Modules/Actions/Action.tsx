import * as actiontype from "../Constants/Constants";
import Axios from "axios";
interface Data {
    taiKhoan: string,
    matKhau: string,
}
let user = localStorage.getItem("user");
JSON.parse("user");

export const actGetProfileAPI = (data: Data) => {
    console.log(data);
    console.log(user);




    // const user = JSON.parse(localStorage.getItem("user"));
    return (dispatch: any) => {
        Axios({
            method: "POST",
            url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            // data: data,
            // headers: `Bearer ${user.accessToken}`

        })
            .then((res: any) => {
                console.log(res.data);
                dispatch(actGetProfile(res.data));
            })
            .catch((err: any) => {
                console.log(err);

            })
    }
}
export const actGetProfile = (value: any) => {
    return {
        type: actiontype.actGetProfileAPI,
        data: value
    }
}
