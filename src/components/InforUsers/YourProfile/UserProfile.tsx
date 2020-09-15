import React from 'react'
import { makeStyles, Theme } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
    DivItem2,
    H3Item2,
} from "../styled-inforusers";
const useStyles = makeStyles((theme: Theme) => ({
    root2: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
        display: "flex",

    },
}));
export default function UserProfile(props: any) {
    const classes = useStyles(); 
    console.log(props.data);
    let { data } = props;
    return (
        <DivItem2>
            <div style={{ marginBottom: "3rem" }}>
                <H3Item2>Your Profile</H3Item2>
                <form className={classes.root2} >
                    <TextField id="name-basic" label="Account" disabled />
                    <TextField id="email-basic" label="Password" />
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#009e7f" }}
                        size="large"
                        startIcon={<SaveIcon />}
                    >
                        Save
                      </Button>
                </form>
            </div>
            <div style={{ marginBottom: "3rem" }}>
                <form className={classes.root2} >
                    <TextField id="name-basic" label="NAME" />
                    <TextField id="email-basic" label="EMAIL" />
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#009e7f" }}
                        size="large"
                        startIcon={<SaveIcon />}
                    >
                        Save
                      </Button>
                </form>
            </div>
            <div style={{ marginBottom: "3rem" }}>
                <form className={classes.root2} >
                    <TextField id="name-basic" label="maNhom" />
                    <TextField id="email-basic" label="maLoaiNguoiDung" />
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#009e7f" }}
                        size="large"
                        startIcon={<SaveIcon />}
                    >
                        Save
                      </Button>
                </form>
            </div>
            <div style={{ marginBottom: "3rem" }}>
                <H3Item2>Contact Number</H3Item2>
                <form className={classes.root2} >
                    <TextField id="phone-basic" label="Number" />
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#009e7f" }}
                        size="large"
                        startIcon={<SaveIcon />}
                    >
                        Save
                      </Button>
                </form>
            </div>
            <div style={{ marginBottom: "3rem" }}>
                <H3Item2>Chi Tiết Khóa Học Ghi Danh</H3Item2>
                <form className={classes.root2} >
                    <TextField id="address-basic" label="Course" />
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#009e7f" }}
                        size="large"
                        startIcon={<SaveIcon />}
                    >
                        Save
                      </Button>
                </form>
            </div>
        </DivItem2>
    )
}

