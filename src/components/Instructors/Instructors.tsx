import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@material-ui/core/Container";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import img1 from "../../images/george-clinton.jpg";
import img2 from "../../images/george-richards.jpg";
import img3 from "../../images/robert-richards.jpg";
import img4 from "../../images/jane-doe.jpg";
import img5 from "../../images/betty-milner.jpg";
import img6 from "../../images/demo-instructor.jpg";
import img7 from "../../images/namrata-parmar.jpg";
import {
  BodyInstructor,
  InstructorTop,
  InstructorH3
} from './styled-Instructors';
const useStyles = makeStyles({
  root: {
    maxHeight: 345,
    maxWidth: 300,
    textAlign: 'center',
    margin: '20px 5px',

  },
  media: {
    height: 200,
  },
});
// function NextArrow(props:any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "none",  }}
//       onClick={onClick}
//     />
//   );
// }

// function PrevArrow(props:any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "none", }}
//       onClick={onClick}
//     />
//   );
// }

export default function Instructors() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3100,
    // nextArrow: <NextArrow/>,
    // prevArrow: <PrevArrow />,

  };
  return (
    <BodyInstructor>
      <Container maxWidth="md" >
        <InstructorTop>
          <InstructorH3>Top Instructors</InstructorH3>
        </InstructorTop>
        <Slider {...settings} >
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    George Clinton
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Photograher, Travel Bloger
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon style={{ color: '#1976d2' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <TwitterIcon style={{ color: '#2196f3' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <InstagramIcon style={{ color: '#ab47bc' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <YouTubeIcon style={{ color: 'red' }} />
                </IconButton>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img2}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    George Richards
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Teacher
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon style={{ color: '#1976d2' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <TwitterIcon style={{ color: '#2196f3' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <InstagramIcon style={{ color: '#ab47bc' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <YouTubeIcon style={{ color: 'red' }} />
                </IconButton>
              </CardActions>
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Demo Instructor
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Teacher
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon style={{ color: '#1976d2' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <TwitterIcon style={{ color: '#2196f3' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <InstagramIcon style={{ color: '#ab47bc' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <YouTubeIcon style={{ color: 'red' }} />
                </IconButton>
              </CardActions>
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jane Doe
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Coach Fitness Trainer
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon style={{ color: '#1976d2' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <TwitterIcon style={{ color: '#2196f3' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <InstagramIcon style={{ color: '#ab47bc' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <YouTubeIcon style={{ color: 'red' }} />
                </IconButton>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img5}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Namrata Parmar
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Marketing Consultants 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon style={{ color: '#1976d2' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <TwitterIcon style={{ color: '#2196f3' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <InstagramIcon style={{ color: '#ab47bc' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <YouTubeIcon style={{ color: 'red' }} />
                </IconButton>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img6}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Betty Milner
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Photograher, Travel Bloger
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon style={{ color: '#1976d2' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <TwitterIcon style={{ color: '#2196f3' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <InstagramIcon style={{ color: '#ab47bc' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <YouTubeIcon style={{ color: 'red' }} />
                </IconButton>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img7}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    George Clinton
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Photograher, Travel Bloger
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon style={{ color: '#1976d2' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <TwitterIcon style={{ color: '#2196f3' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <InstagramIcon style={{ color: '#ab47bc' }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <YouTubeIcon style={{ color: 'red' }} />
                </IconButton>
              </CardActions>
            </Card>
          </div>
        </Slider>
      </Container >
    </BodyInstructor>

  )
}
