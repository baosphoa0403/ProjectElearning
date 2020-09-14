import React from "react";
import { DivProductView, ButtonCard, ButtonBack, Img } from "./StyleDetail";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Container from "@material-ui/core/Container";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Cart from "../SearchForListCourses/cart";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { rootState } from "../../redux/reducers/Reducers";
import { connect } from "react-redux";
import { useEffect } from "react";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  h2: {
    fontSize: "21px",
    fontWeight: 700,
    color: "#0d1136",
  },
  p: {
    fontSize: "14px",
    color: "#77798c",
  },
  content: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#777a8c",
    lineHeight: "1.8",
    height: "115px",
    // do readMore and less
    overflow: "hidden",
    margin: "0",
  },
  readMore: {
    color: "#009e7f",
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: "50px",
    textTransform: "uppercase",
  },
  price: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#009e7f",
    marginBottom: "20px",
  },
  add: {
    margin: "0px 10px",
  },
  icon: {
    margin: "-7px 0px",
    fontSize: "25px",
  },
}));
interface PropsParams extends RouteComponentProps<{ id: string }> {}
function CourseDetailChild(props: PropsParams) {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);
  const [newCourse, setNewCourse] = React.useState({
    maKhoaHoc: "string",
    biDanh: "string",
    tenKhoaHoc: "string",
    moTa: "string",
    luotXem: Number,
    hinhAnh: "string",
    maNhom: "string",
    ngayTao: "string",
    soLuongHocVien: Number,
    nguoiTao: {
      taiKhoan: "string",
      hoTen: "string",
      maLoaiNguoiDung: "string",
      tenLoaiNguoiDung: "string",
    },
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: "string",
      tenDanhMucKhoaHoc: "string",
    },
  });
  let id = props.match.params.id;
  console.log(newCourse);

  useEffect(() => {
    console.log(id);

    Axios({
      method: "GET",
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    })
      .then((res: any) => {
        setNewCourse(res.data);
      })
      .catch((err: any) => {
        console.log(err.request);
      });
  }, []);
  return (
    <React.Fragment>
      <ButtonBack>
        <ArrowBackIcon className={classes.icon} />
        <Typography component="span" variant="button">
          Back
        </Typography>
      </ButtonBack>
      <Container>
        <DivProductView>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid lg={6} xl={6} md={6}>
              <Img>
                <img
                  src={newCourse.hinhAnh}
                  width="100%"
                  height="100%"
                  alt=""
                />
              </Img>
            </Grid>
            <Grid lg={6} xl={6} md={6}>
              <Typography variant="h5" component="h2" className={classes.h2}>
                {newCourse.biDanh}
              </Typography>
              <Typography
                variant="caption"
                component="span"
                className={classes.p}
              >
                By {newCourse.nguoiTao.hoTen}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.content}
              >
                The direction and constancy of the will is what really matters,
                and intellect and feeling are only important insofar as they
                contribute to that . There is only one way to happiness, and
                that is to cease worrying things which are beyond the power of
                our will . Don’t let your will roar when your power only
                whispers. You can bind my body, tie my hands, govern my actions:
                you are the strongest, and society adds to your power; but with
                my will, sir, you can do nothing.
              </Typography>
              <Typography
                component="div"
                variant="button"
                className={classes.readMore}
              >
                read more
              </Typography>
              <Typography component="div" className={classes.price}>
                $82
              </Typography>
              <Typography component="div">
                <ButtonCard>
                  <ShoppingBasketIcon />
                  <Typography
                    component="p"
                    className={classes.add}
                    onClick={() => {
                      setOpen(!isOpen);
                    }}
                  >
                    Add To Cart
                  </Typography>
                </ButtonCard>
              </Typography>
            </Grid>
          </Grid>
        </DivProductView>
      </Container>

      <Cart />
    </React.Fragment>
  );
}
// const mapStateToProps = (state: rootState) => {
//   return {
//     newDetailCourse: state.detailCourseReducer.detailCourse,
//   };
// };
// const mapDispatchToProps = (dispatch: any) => {
//   return {};
// };
const CourseDetail = withRouter(CourseDetailChild as any); //Note: It is a workaround not an actual solution
export default CourseDetail;
