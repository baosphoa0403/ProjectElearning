import React from "react";
import Container from "@material-ui/core/Container";
import { Div } from "./styleComponent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import images1 from "../../images/images1.jpg";
import images2 from "../../images/images2.jpg";
import images3 from "../../images/images3.jpg";
export default function IntroduceTarget() {
  return (
    <Div className="start">
      <Container fixed>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid xs={12} lg={4} md={3}  xl={3}>
            <Div className="images">
              <img src={images1} alt="" />
            </Div>
          </Grid>
          <Grid xs={12} lg={4} md={3}  xl={3}>
            <Div className="images">
              <img src={images2} alt="" />
            </Div>
          </Grid>
          <Grid xs={12} lg={4} md={3}  xl={3}>
            <Div className="images">
              <img src={images3} alt="" />
            </Div>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
           <Grid xs={12} lg={4} md={3} xl={3}>
            <Div className="content">
              <Typography variant="h6">Upgrade your skills</Typography>
              <Typography variant="overline">
                Take courses from true professionals, find a program to your
                liking, and learn the newest and most popular disciplines.
              </Typography>
            </Div>
           </Grid>
           <Grid xs={12} lg={4} md={3}  xl={3}>
            <Div className="content">
              <Typography variant="h6">Upgrade your skills</Typography>
              <Typography variant="overline">
                Take courses from true professionals, find a program to your
                liking, and learn the newest and most popular disciplines.
              </Typography>
            </Div>
           </Grid>
           <Grid xs={12} lg={4} md={3}  xl={3}>
            <Div className="content">
              <Typography variant="h6">Upgrade your skills</Typography>
              <Typography variant="overline">
                Take courses from true professionals, find a program to your
                liking, and learn the newest and most popular disciplines.
              </Typography>
            </Div>
           </Grid>
        </Grid>
      </Container>
    </Div>
  );
}
