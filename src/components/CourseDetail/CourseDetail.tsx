import React from "react";
import { DivProductView, ButtonCard, ButtonBack, Img } from "./StyleDetail";
import Grid from "@material-ui/core/Grid";
import imgTest from "../../images/imgTest.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Container from "@material-ui/core/Container";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles(theme => ({
  h2: {
    fontSize: "21px",
    fontWeight: 700,
    color: "#0d1136"
  },
  p: {
    fontSize: "14px",
    color: "#77798c"
  },
  content: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#777a8c",
    lineHeight: "1.8",
    height: "115px",
    // do readMore and less
    overflow: "hidden",
    margin: "0"
  },
  readMore: {
    color: "#009e7f",
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: "50px",
    textTransform: "uppercase"
  },
  price: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#009e7f",
    marginBottom: "20px"
  },
  add: {
    margin: "0px 10px"
  }, 
  icon: {
    margin: "-7px 0px",
    fontSize: "25px"
  }
}));
export default function CourseDetail() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container >
        <DivProductView>
          <Grid container direction="row" justify="center" alignItems="flex-start">
            <Grid lg={6} xl={6} md={6} >
              <ButtonBack> 
              <ArrowBackIcon className={classes.icon}/>
              <Typography
                component="span"
                variant="button"
              >
                Back
              </Typography>
               
              </ButtonBack>
              <Img>
              <img src={imgTest} width="100%" height="100%" />
              </Img>

            </Grid>
            <Grid lg={6} xl={6} md={6} >
              <Typography variant="h5" component="h2" className={classes.h2}>
                The Golden Treasury of Children Literature
              </Typography>
              <Typography variant="caption" component="p" className={classes.p}>
                By Skipton Stitwell
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.content}
              >
                nibh quisque id justo sit amet sapien dignissim vestibulum
                vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae nulla dapibus dolor vel est donec odio
                justo sollicitudin ut suscipit a feugiat et eros vestibulum ac
                est lacinia nisi venenatis tristique fusce congue diam id ornare
                imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed
                augue aliquam erat volutpat in congue etiam justo etiam pretium
                iaculis justo in hac habitasse platea dictumst etiam faucibus
                cursus urna ut tellus nulla ut erat id mauris vulputate
                elementum nullam varius nulla facilisi cras non velit nec nisi
                vulputate nonummy maecenas tincidunt lacus at velit vivamus vel
                nulla eget eros elementum pellentesque quisque porta volutpat
                erat quisque erat eros viverra eget congue eget semper rutrum
                nulla nunc purus phasellus in felis donec semper sapien a libero
                nam dui proin leo odio porttitor id consequat in consequat ut
                nulla sed accumsan felis ut at dolor quis odio consequat varius
                integer ac leo pellentesque ultrices mattis odio donec vitae
                nisi nam ultrices libero non mattis pulvinar nulla pede
                ullamcorper augue a suscipit
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
                  <Typography component="p" className={classes.add}>
                    Add To Cart
                  </Typography>
                </ButtonCard>
              </Typography>
            </Grid>
          </Grid>
        </DivProductView>
      </Container>
    </React.Fragment>
  );
}
