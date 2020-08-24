import styled from "styled-components";


export const Div = styled.div`
  &.start{
    position: relative;
    overflow: visible;
    box-sizing: border-box;
    height: 300px;
    padding-left: 149.5px;
    padding-right: 90.5px;
    background-color: #009e7f!important;
    margin-bottom: 44px !important;
    margin: 250px 0px;
    @media only screen and (min-width: 320px) and (max-width: 1024px) {
       display: none;
    }
  }
  &.content{
    color: #fff !important;
    position: absolute;
    bottom: 0px;
    max-width: 300px;
    margin: 0px 30px;
    height: 185px;
  }
  &.images{
    margin-bottom: 30px;
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,.18);
    border-radius: 40px;
    overflow: overlay;
    -webkit-transition: .3s;
    transition: .3s;
    vertical-align: top;
    position: absolute;
    top: -100px;
    &:hover{
      transform: translateY(-10px);
      box-shadow: 0 0 18.69px 2.31px rgba(77, 179, 113,.5);
      transition: all 0.5s ease;
      z-index: 1;
    }
  }
`