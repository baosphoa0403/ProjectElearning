import React, { Component } from "react";

import Container from "@material-ui/core/Container";
import {
  BodySignUp,
  DivBackground,
  DivSignUpContent,
  H2SignUp,
  DivFormGroup,
  InputFormSignUp,
  InputSubmitSignUp,
  ElementpLoginHere,
  ElementaLoginHere,
} from "./styled-component-signup";
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
                <ElementaLoginHere
                  href="https://colorlib.com/etc/regform/colorlib-regform-8/?fbclid=IwAR3sh3S6Rfd_czJxJLv9uGOox4tGVIPs8_T9yyF85Hwrl__IC0sW4QxEH24#"
                  className="loginhere-link"
                >
                  Login here
                </ElementaLoginHere>
              </ElementpLoginHere>
            </DivSignUpContent>
          </Container>
        </DivBackground>
      </BodySignUp>
    );
  }
}

export default SignUp;
