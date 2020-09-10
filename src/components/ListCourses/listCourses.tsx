import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Courses from "./ItemCourse/course/DetailForCourse";

function ListCourses(props: any) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(props.listCourses);
  let { listCourses } = props;

  const renderListCourses = () => {
    return listCourses.map((course: any, index: any) => {
      console.log(course);

      return <Courses course={course} key={index} />;
    });
  };
  const Wrapper = styled.div`
    .course {
      &:focus {
        outline: none !important;
      }
    }
    .slick-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .slick-prev {
      left: -15px;
      z-index: 99999;
      :before {
        font-size: 35px;
        color: #234;
      }
    }
    .slick-next {
      z-index: 99999;
      border-radius: 50%;
      right: 0px;

      :before {
        font-size: 35px;
        color: #234;
      }
    }
  `;
  const DivListCourses = styled.div`
    padding: 40px 0 0 0;
    height: 500px;
    margin-top: 3em;
    background-image: url(/images/backgroundforlist.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    color: #fff;
  `;
  const DivTittle = styled.div`
    text-align: center;
    padding: 50px 20px 50px 20px;
    font-size: 25px;
  `;

  return (
    <React.Fragment>
      <DivListCourses>
        {/* <DivContaintSearch>
        <InputForSearchCourses type="text" placeholder="Search For Courses" />

        <span>Search</span>
      </DivContaintSearch> */}
        <Container>
          <Wrapper>
            <DivTittle>LIST OF COURSES</DivTittle>
            <Slider {...settings}>{renderListCourses()}</Slider>
          </Wrapper>
        </Container>
      </DivListCourses>
    </React.Fragment>
  );
}

export default ListCourses;
