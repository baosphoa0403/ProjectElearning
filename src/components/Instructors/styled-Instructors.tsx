import styled from "styled-components";
interface Props {
  darkmode: boolean
}
export const BodyInstructor = styled.div<Props>`
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  background-position: center center;
  box-sizing: border-box;
  background-color: ${p  => p.darkmode ? '#303030' : 'white'};
  padding-bottom: 55px;

  .slick-next {
    right: 0;
    display: none !important;
  }
  @media only screen and (max-width: 750px) {
    opacity: 0;
  }
`;
export const InstructorTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
  padding: 0 15px;
  margin: 0 0 17px;
`;
export const InstructorH3 = styled.h3<Props>`
  font-size: 45px;
  line-height: 45px;
  margin-bottom: 20px;
  margin-right: 60px;
  color: ${p  => p.darkmode ? 'white' : 'black'};
  font-weight: 700;
  font-style: normal !important;
  font-family: Quicksand !important;
`;
