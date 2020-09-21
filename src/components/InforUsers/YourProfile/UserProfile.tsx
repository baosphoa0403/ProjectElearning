import React, { useEffect, useState } from 'react'
import { makeStyles, Theme } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";

import {
    DivItem2,
    H3Item2,
} from "../styled-inforusers";
import Axios from 'axios';
const useStyles = makeStyles((theme: Theme) => ({
    root2: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
        display: "flex",

    },
}));

export default function UserProfile() {
    const classes = useStyles();
    const [taiKhoan, settaiKhoan] = useState("");
    const [matKhau, setmatKhau] = useState("");
    const [hoTen, sethoTen] = useState("");
    const [soDT, setsoDT] = useState("");
    const [maLoaiNguoiDung, setmaLoaiNguoiDung] = useState('');
    const [maNhom, setmaNhom] = useState('');
    const [email, setemail] = useState("");
    const [detail, setDetail] = useState();
    const [isOk, setIsOk] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("user")) {
            let userLocalS: any = localStorage.getItem("user");
            if (userLocalS) {
                var user = JSON.parse(userLocalS);
            }
            setDetail(user)
        }
    }, [])
    console.log(detail);
    console.log(detail?.accessToken);

    useEffect(() => {
        settaiKhoan(detail?.taiKhoan);
        setmaLoaiNguoiDung(detail?.maLoaiNguoiDung)
        setmaNhom(detail?.maNhom)
        setmatKhau(detail?.matKhau);
        sethoTen(detail?.hoTen);
        setsoDT(detail?.soDT);
        setemail(detail?.email);

    }, [detail]);

    const editUser = () => {
        let obj = {
            taiKhoan: taiKhoan,
            matKhau: matKhau,
            hoTen: hoTen,
            soDT: soDT,
            maLoaiNguoiDung: maLoaiNguoiDung,
            maNhom: maNhom,
            email: email
        };
        Axios({
            method: "PUT",
            url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            data: obj,
            headers: {
                Authorization: `Bearer ${detail?.accessToken}`,
            }
        })
            .then(() => {
                let userLocal: any = localStorage.getItem("user");
                if (userLocal) {
                    var allUser: any = JSON.parse(userLocal);
                }
                allUser.hoTen = hoTen;
                allUser.email= email;
                allUser.soDT=soDT;
                allUser.matKhau=matKhau;
                setIsOk(true);
                Swal.fire("Account Editing Is Successful!", "Nhấn OK để thoát!", "success");
                localStorage.removeItem("user");
                localStorage.setItem("user", JSON.stringify(allUser));
                
            })
            .catch((error) => {
                console.log(error);
                Swal.fire("Account Editing Failed!", error.response.data, "error");
            });
    }


    return (
        <DivItem2>
            <form >
                <div style={{ marginBottom: "3rem" }}>
                    <H3Item2>Your Profile</H3Item2>
                    <form className={classes.root2} >
                        <TextField id="name-basic" label="Account" name="taiKhoan" value={taiKhoan} disabled />
                        <TextField id="email-basic" label="Password" name="matKhau" value={matKhau} onChange={e => setmatKhau(e.target.value)} />
                    </form>
                </div>
                <div style={{ marginBottom: "3rem" }}>
                    <form className={classes.root2} >
                        <TextField id="name-basic" label="Name" name="hoTen" value={hoTen} onChange={e => sethoTen(e.target.value)} />
                        <TextField id="email-basic" label="Email" name="email" value={email} onChange={e => setemail(e.target.value)} />
                    </form>
                </div>
                <div style={{ marginBottom: "3rem" }}>
                    <form className={classes.root2} >
                        <TextField id="email-basic" label="User Type Code" value={maLoaiNguoiDung} disabled />
                        <TextField id="phone-basic" label="Phone Number" name="soDT" value={soDT} onChange={e => setsoDT(e.target.value)}
                            required={true}
                        />
                    </form>
                </div>
                <div style={{ marginBottom: "3rem" }}>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#009e7f" }}
                        size="large"
                        startIcon={<SaveIcon />}
                        onClick={editUser}
                    >
                        Save your changes
                </Button>
                </div>
            </form>
        </DivItem2>
    )
}






























