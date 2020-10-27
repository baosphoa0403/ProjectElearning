import styled from "styled-components";
interface Props {
  darkmode: boolean
}
export const BodyCourse = styled.div<Props>`
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  background-position: center center;
  box-sizing: border-box;
  background-color: ${p  => p.darkmode ? '#303030' : '#f2f6fb'};
  padding-bottom: 55px;

  .slick-next {
    right: 0;
    display: none !important;
  }
  .slick-prev {
    right: 0;
    display: none !important;
  }
`;

export const CourseInfoTop = styled.div`
    display: initial;
    text-align: center!important;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 25px;
    align-items: center;
    padding: 0 15px;
    margin: 0 0 17px;
`;
export const CourseH3 = styled.h3<Props>`
  font-size: 45px;
  line-height: 45px;
  margin-bottom: 20px;
  color: ${p  => p.darkmode ? 'white' : '#273044'};
  font-weight: 700;
  font-style: normal !important;
  font-family: Quicksand !important;
`;


