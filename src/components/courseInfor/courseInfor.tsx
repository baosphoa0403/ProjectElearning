import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import {
    CourseInfoTop, BodyCourse, CourseH3
} from "./styled-courseInfor";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import img1 from "../../images/wel1.jpeg";
import img2 from "../../images/wel2.jpeg";
import img3 from "../../images/wel3.jpeg";
import img4 from "../../images/wel4.jpeg";
import { Switch } from "../Interface/Interface"
import { connect } from "react-redux";
import { rootState } from "../../redux/reducers/Reducers";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxHeight: "100%",
            maxWidth: "100%",
            textAlign: "center",
            margin: "20px 5px",
        },
        media: {
            height: 400,
        },
    }),
);

function CourseInfor(props: Switch) {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    let { darkMode } = props;

    return (
        <BodyCourse darkmode={darkMode}>
            <Container maxWidth="md">
                <CourseInfoTop>
                    <CourseH3 darkmode={darkMode}>WELCOME TO PICKBAZAR</CourseH3>
                </CourseInfoTop>
                <Slider {...settings}>
                    <div>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={img2}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </div>
                    <div>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={img1}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </div>
                    <div>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={img3}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </div>
                    <div>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={img4}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </div>
                </Slider>
            </Container>
        </BodyCourse>
    );
}
const mapStateToProps = (state: rootState) => {
    return {
        darkMode: state.reducerSwitch.darkMode
    };
};
export default connect(mapStateToProps, null)(CourseInfor);

















