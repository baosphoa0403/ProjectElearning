import React, { Component } from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
const BodySignUp = styled.div`
  background-image: url(/images/signup-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  background-position: center center;
  padding: 115px 0;
`;
const DivBackground = styled.div`
  font-size: 14px;
  line-height: 1.8;
  color: #222;
  font-weight: 400;
  font-family: "Montserrat";
  margin: 10px;
  display: block;
`;
const DivSignUpContent = styled.div`
  background: #fff;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  padding: 50px 85px;
  @media only screen and (max-width: 480px) {
    padding: 50px 25px;
  }
`;
const H2SignUp = styled.h2`
  line-height: 1.66;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: #222;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
`;
const DivFormGroup = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
`;
const InputFormSignUp = styled.input`
  width: 100%;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  padding: 17px 20px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  color: #222;
  &:focus {
    outline: none;
    border: 1px solid transparent;
    -webkit-border-image-source: -webkit-linear-gradient(
      to right,
      #9face6,
      #74ebd5
    );
    -moz-border-image-source: -moz-linear-gradient(to right, #9face6, #74ebd5);
    -o-border-image-source: -o-linear-gradient(to right, #9face6, #74ebd5);
    border-image-source: linear-gradient(to right, #9face6, #74ebd5);
    -webkit-border-image-slice: 1;
    border-image-slice: 1;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    background-origin: border-box;
  }
`;
const InputSubmitSignUp = styled.input`
  outline: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  padding: 17px 20px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  border: none;
  background-image: -moz-linear-gradient(to left, #74ebd5, #9face6);
  background-image: -ms-linear-gradient(to left, #74ebd5, #9face6);
  background-image: -o-linear-gradient(to left, #74ebd5, #9face6);
  background-image: -webkit-linear-gradient(to left, #74ebd5, #9face6);
  background-image: linear-gradient(to left, #74ebd5, #9face6);
`;
const ElementpLoginHere = styled.p`
  color: #555;
  font-weight: 500;
  text-align: center;
  margin-top: 91px;
  margin-bottom: 5px;
  font-size: 20px;
`;
const ElementaLoginHere = styled.a`
  font-weight: 700;
  color: #222;
`;
export class SignUp extends Component {
  render() {
    return (
      <BodySignUp>
        <DivBackground>
          <Container maxWidth="sm">
            <DivSignUpContent>
              <form id="signup-form" className="signup-form">
                <H2SignUp>Create account</H2SignUp>

                <DivFormGroup>
                  <InputFormSignUp type="text" placeholder="Your Email" />
                </DivFormGroup>

                <DivFormGroup>
                  <InputFormSignUp type="text" placeholder="Account" />
                </DivFormGroup>
                <DivFormGroup>
                  <InputFormSignUp type="password" placeholder="Password" />
                </DivFormGroup>

                <DivFormGroup>
                  <InputFormSignUp type="text" placeholder="Your Name" />
                </DivFormGroup>
                <DivFormGroup>
                  <InputFormSignUp type="text" placeholder="Phone Number" />
                </DivFormGroup>

                <DivFormGroup>
                  <InputFormSignUp type="text" placeholder="Code Group" />
                </DivFormGroup>
                <DivFormGroup>
                  <InputSubmitSignUp
                    type="submit"
                    placeholder="Code Group"
                    value="Sign up"
                  />
                </DivFormGroup>
              </form>
              <ElementpLoginHere>
                Have already an account ?
                <a
                  href="https://colorlib.com/etc/regform/colorlib-regform-8/?fbclid=IwAR3sh3S6Rfd_czJxJLv9uGOox4tGVIPs8_T9yyF85Hwrl__IC0sW4QxEH24#"
                  className="loginhere-link"
                >
                  <ElementaLoginHere> Login here</ElementaLoginHere>
                </a>
              </ElementpLoginHere>
            </DivSignUpContent>
          </Container>
        </DivBackground>
      </BodySignUp>
    );
  }
}

export default SignUp;
