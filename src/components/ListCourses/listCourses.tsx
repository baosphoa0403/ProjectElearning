import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
function ListCourses() {
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
  // style slick-slider
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

  const DivGame = styled.div`
    padding: 30px;
    position: relative !important;
    width: 14em !important;
    color: white;

    &:hover {
      z-index: 1;
      .name-course {
        color: white;
        animation: gameName 250ms forwards;
      }
      .front {
        transform: translateY(-20%) scale(0.8);
        color: white;
      }
      .background {
        background: #234;
        transition: transform 250ms ease-in-out, opacity 100ms linear;
        opacity: 1;
        transform: scale(1, 0.5);
        display: block;
        min-height: 350px;
        border-radius: 0.5rem;
      }
      .contain-viewers-img {
        display: none;
      }
      .back {
        opacity: 1;
        bottom: 0;
      }
    }
  `;

  const P = styled.p`
    margin: 0;
  `;

  const DivBackInFor = styled.div`
    opacity: 0;
    position: absolute;
    bottom: 5%;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const DivCoursesInfor = styled.div`
    columns: 2;
    column-rule: 1px solid white;
    display: flex;
    align-items: center;
    color: white;
  `;
  const PCoursesStartandViewers = styled.p`
    font-size: 0.725rem;
    text-align: center;
    padding: 0.3rem;
  `;
  const SpanCoursesInfor = styled.span`
    font-size: 1rem;
    display: block;
  `;
  const DivContainIMG = styled.div`
    display: flex;
  `;
  const ContainIMG = styled.img`
  max-width: 100%;
  width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    border: 2px solid #0d1113; }
    &:nth-of-type(1) {
      transform: translate(50%);
      z-index: 1; }
   &:nth-of-type(2) {
      transform: translate(25%);
      z-index: 1; }
  `;
  const IMGCourse = styled.img`
    max-width: 100%;
    border-radius: 0.5em;
  `;
  const H3Name = styled.h3`
    margin: 0.75em 0px;
    @keyframes gameName {
      0% {
        text-align: center;
        opacity: 1;
      }
      20% {
        text-align: center;
        opacity: 0;
      }
      50% {
        text-align: center;
        opacity: 0;
      }
      100% {
        text-align: center;
        opacity: 1;
      }
    }
  `;
  const DivContaintViewersAndIMGs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const DivBackGroundForCourse = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    transform: scale(0.2, 0.9);
    transition: 250ms;
    border-radius: 0.5em;
    opacity: 0;
  `;
  const DivListCourses = styled.div`
    padding: 40px 0 0 0;
    height: 500px;
    margin-top: 3em;

    background: #009e7f;
    color: #fff;
  `;
  const DivTittle = styled.div`
    text-align: center;
    padding: 50px 20px 50px 20px;
    font-size: 25px;
  `;
  // const DivContaintSearch = styled.div`
  //   width: 20em;
  //   box-shadow: 0 21px 36px rgba(0, 0, 0, 0.05);
  //   align-items: center;
  //   display: flex;
  //   justify-content: center;
  //   @media only screen and (max-width: 480px) {
  //   }
  // `;
  // const InputForSearchCourses = styled.input`
  //   padding: 10px 20px 10px 10px;
  //   flex-grow: 1;
  //   border: none;
  //   outline: none;
  //   font-size: 12px;
  //   color: #77798c;

  //   width: 100%;
  //   height: 100%;
  // `;
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
            <Slider {...settings}>
              <DivGame className="course">
                <div className="front">
                  <IMGCourse src="/images/g4.jpg" alt="" />

                  <H3Name className="name-course">Girl Xinh</H3Name>
                  <DivContaintViewersAndIMGs className="contain-viewers-img">
                    <P>555,9K</P>
                    <DivContainIMG>
                      <ContainIMG src="/images/g1.jpg" alt="" />
                      <ContainIMG src="/images/g2.png" alt="" />
                      <ContainIMG src="/images/g3.png" alt="" />
                    </DivContainIMG>
                  </DivContaintViewersAndIMGs>
                </div>

                <DivBackInFor className="back">
                  <DivCoursesInfor>
                    <PCoursesStartandViewers>
                      559k<SpanCoursesInfor>Watching</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                    <PCoursesStartandViewers>
                      21/11/2016<SpanCoursesInfor>Opening</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                  </DivCoursesInfor>
                  <Button variant="contained" color="primary">
                    See Detail
                  </Button>
                </DivBackInFor>

                <DivBackGroundForCourse className="background"></DivBackGroundForCourse>
              </DivGame>
              <DivGame className="course">
                <div className="front">
                  <IMGCourse src="/images/g4.jpg" alt="" />

                  <H3Name className="name-course">Girl Xinh</H3Name>
                  <DivContaintViewersAndIMGs className="contain-viewers-img">
                    <P>555,9K</P>
                    <DivContainIMG>
                      <ContainIMG src="/images/g1.jpg" alt="" />
                      <ContainIMG src="/images/g2.png" alt="" />
                      <ContainIMG src="/images/g3.png" alt="" />
                    </DivContainIMG>
                  </DivContaintViewersAndIMGs>
                </div>

                <DivBackInFor className="back">
                  <DivCoursesInfor>
                    <PCoursesStartandViewers>
                      559k<SpanCoursesInfor>Watching</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                    <PCoursesStartandViewers>
                      21/11/2016<SpanCoursesInfor>Opening</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                  </DivCoursesInfor>
                  <Button variant="contained" color="primary">
                    See Detail
                  </Button>
                </DivBackInFor>

                <DivBackGroundForCourse className="background"></DivBackGroundForCourse>
              </DivGame>
              <DivGame className="course">
                <div className="front">
                  <IMGCourse src="/images/g4.jpg" alt="" />

                  <H3Name className="name-course">Girl Xinh</H3Name>
                  <DivContaintViewersAndIMGs className="contain-viewers-img">
                    <P>555,9K</P>
                    <DivContainIMG>
                      <ContainIMG src="/images/g1.jpg" alt="" />
                      <ContainIMG src="/images/g2.png" alt="" />
                      <ContainIMG src="/images/g3.png" alt="" />
                    </DivContainIMG>
                  </DivContaintViewersAndIMGs>
                </div>

                <DivBackInFor className="back">
                  <DivCoursesInfor>
                    <PCoursesStartandViewers>
                      559k<SpanCoursesInfor>Watching</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                    <PCoursesStartandViewers>
                      21/11/2016<SpanCoursesInfor>Opening</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                  </DivCoursesInfor>
                  <Button variant="contained" color="primary">
                    See Detail
                  </Button>
                </DivBackInFor>

                <DivBackGroundForCourse className="background"></DivBackGroundForCourse>
              </DivGame>
              <DivGame className="course">
                <div className="front">
                  <IMGCourse src="/images/g4.jpg" alt="" />

                  <H3Name className="name-course">Girl Xinh</H3Name>
                  <DivContaintViewersAndIMGs className="contain-viewers-img">
                    <P>555,9K</P>
                    <DivContainIMG>
                      <ContainIMG src="/images/g1.jpg" alt="" />
                      <ContainIMG src="/images/g2.png" alt="" />
                      <ContainIMG src="/images/g3.png" alt="" />
                    </DivContainIMG>
                  </DivContaintViewersAndIMGs>
                </div>

                <DivBackInFor className="back">
                  <DivCoursesInfor>
                    <PCoursesStartandViewers>
                      559k<SpanCoursesInfor>Watching</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                    <PCoursesStartandViewers>
                      21/11/2016<SpanCoursesInfor>Opening</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                  </DivCoursesInfor>
                  <Button variant="contained" color="primary">
                    See Detail
                  </Button>
                </DivBackInFor>

                <DivBackGroundForCourse className="background"></DivBackGroundForCourse>
              </DivGame>
              <DivGame className="course">
                <div className="front">
                  <IMGCourse src="/images/g4.jpg" alt="" />

                  <H3Name className="name-course">Girl Xinh</H3Name>
                  <DivContaintViewersAndIMGs className="contain-viewers-img">
                    <P>555,9K</P>
                    <DivContainIMG>
                      <ContainIMG src="/images/g1.jpg" alt="" />
                      <ContainIMG src="/images/g2.png" alt="" />
                      <ContainIMG src="/images/g3.png" alt="" />
                    </DivContainIMG>
                  </DivContaintViewersAndIMGs>
                </div>

                <DivBackInFor className="back">
                  <DivCoursesInfor>
                    <PCoursesStartandViewers>
                      559k<SpanCoursesInfor>Watching</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                    <PCoursesStartandViewers>
                      21/11/2016<SpanCoursesInfor>Opening</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                  </DivCoursesInfor>
                  <Button variant="contained" color="primary">
                    See Detail
                  </Button>
                </DivBackInFor>

                <DivBackGroundForCourse className="background"></DivBackGroundForCourse>
              </DivGame>
              <DivGame className="course">
                <div className="front">
                  <IMGCourse src="/images/g4.jpg" alt="" />

                  <H3Name className="name-course">Girl Xinh</H3Name>
                  <DivContaintViewersAndIMGs className="contain-viewers-img">
                    <P>555,9K</P>
                    <DivContainIMG>
                      <ContainIMG src="/images/g1.jpg" alt="" />
                      <ContainIMG src="/images/g2.png" alt="" />
                      <ContainIMG src="/images/g3.png" alt="" />
                    </DivContainIMG>
                  </DivContaintViewersAndIMGs>
                </div>

                <DivBackInFor className="back">
                  <DivCoursesInfor>
                    <PCoursesStartandViewers>
                      559k<SpanCoursesInfor>Watching</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                    <PCoursesStartandViewers>
                      21/11/2016<SpanCoursesInfor>Opening</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                  </DivCoursesInfor>
                  <Button variant="contained" color="primary">
                    See Detail
                  </Button>
                </DivBackInFor>

                <DivBackGroundForCourse className="background"></DivBackGroundForCourse>
              </DivGame>
              <DivGame className="course">
                <div className="front">
                  <IMGCourse src="/images/g4.jpg" alt="" />

                  <H3Name className="name-course">Girl Xinh</H3Name>
                  <DivContaintViewersAndIMGs className="contain-viewers-img">
                    <P>555,9K</P>
                    <DivContainIMG>
                      <ContainIMG src="/images/g1.jpg" alt="" />
                      <ContainIMG src="/images/g2.png" alt="" />
                      <ContainIMG src="/images/g3.png" alt="" />
                    </DivContainIMG>
                  </DivContaintViewersAndIMGs>
                </div>

                <DivBackInFor className="back">
                  <DivCoursesInfor>
                    <PCoursesStartandViewers>
                      559k<SpanCoursesInfor>Watching</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                    <PCoursesStartandViewers>
                      21/11/2016<SpanCoursesInfor>Opening</SpanCoursesInfor>
                    </PCoursesStartandViewers>
                  </DivCoursesInfor>
                  <Button variant="contained" color="primary">
                    See Detail
                  </Button>
                </DivBackInFor>

                <DivBackGroundForCourse className="background"></DivBackGroundForCourse>
              </DivGame>
            </Slider>
          </Wrapper>
        </Container>
      </DivListCourses>
    </React.Fragment>
  );
}

export default ListCourses;
