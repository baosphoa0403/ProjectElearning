import styled from "styled-components";

export const DivSlider = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(/images/wave.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 767px) {
    opacity: 0;
  }
`;
export const DivContentImages = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivContentSliderImage = styled.div`
  min-height: 200px;
  min-width: 200px;
  background-image: url(/images/3.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  animation: slide 20s infinite;
  @keyframes slide {
    25% {
      background-image: url(/images/2.png);
    }
    50% {
      background-image: url(/images/4.jpg);
    }
    75% {
      background-image: url(/images/5.png);
    }
    100% {
      background-image: url(/images/3.png);
    }
  }
`;
export const DivContainer = styled.div`
  padding: 0 50px 0 50px;
`;
export const DivContentIntroduce = styled.div`
  text-align: center;
  font-size: 25px;
  color: #275ebf;
  padding: 90px;
`;
