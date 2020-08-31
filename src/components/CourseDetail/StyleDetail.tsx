import styled from "styled-components";

export const DivProductView = styled.div`
//    background-color: #fff;
   padding-bottom: 3rem!important;
   padding-top: 10rem!important;
   position: relative;
`

export const ButtonBack = styled.button`
   background-color: #fff;
   border: 1px solid #f1f1f1;
   color: #77798c;
   position: absolute;
   font-size: 14px;
   font-weight: 400;
   left: -65px;
   border-radius: 5px;
   padding: 5px 20px;
   @media (max-width: 320px){
    top: 110px!important;
    left: 36px;
    }
    @media (min-width: 321px) and (max-width: 377px){
        top: 114px;
    left: 42px;
    }
    @media (min-width: 378px) and (max-width: 425px){
        top: 114px;
    left: 49px;
    }
    @media (min-width: 426px) and (max-width: 500px){
        top: 115px;
    left: 52px;
    }
    @media (min-width: 501px) and (max-width: 540px){
        top: 113px;
        left: 84px;
    }
    @media (min-width: 541px) and (max-width: 768px){
        top: 158px;
        left: 30px;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        top: 160px;
        left: -28px;
    }
    @media (min-width: 1025px) and (max-width: 1440px){
        top: 160px;
        left: 0px;
    }

`
export const Img = styled.div`
max-width: 450px;
max-height: 450px;
margin: 0 auto;
`

export const ButtonCard = styled.button`
background-color: #009e7f;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 40px;
`

