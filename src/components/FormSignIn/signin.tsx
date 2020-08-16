import React from 'react'
import Container from "@material-ui/core/Container";
import {
  BodyLogin,
  DivBackground,
  DivLoginContent,
  H2Login,
  DivFormGroup,
  InputFormLogin,
  InputSubmitLogin,
  ElementpLoginHere,
  ElementaSignUpHere,
} from "./styled-component-login";
export default function Login() {
  return (
    <BodyLogin>
      <DivBackground>
        <div className="main-login">
          <section className="login">
            <Container maxWidth="sm">
              <DivLoginContent>
                <form id="login-form" className="login-form">
                  <H2Login>USER LOGIN</H2Login>
                  <DivFormGroup>
                    <InputFormLogin type="text" placeholder="Account" />
                  </DivFormGroup>
                  <DivFormGroup>
                    <InputFormLogin type="password" placeholder="Password" />
                  </DivFormGroup>
                  <DivFormGroup>
                    <InputSubmitLogin
                      type="submit"
                      placeholder="Code Group"
                      value="LogIn"
                    />
                  </DivFormGroup>
                </form>
                <ElementpLoginHere>
                  Don't have a account ?
                                        <a
                    href="https://colorlib.com/etc/regform/colorlib-regform-8/?fbclid=IwAR3sh3S6Rfd_czJxJLv9uGOox4tGVIPs8_T9yyF85Hwrl__IC0sW4QxEH24#"
                    className="loginhere-link"
                  >
                    <ElementaSignUpHere> Create Account here</ElementaSignUpHere>
                  </a>
                </ElementpLoginHere>
              </DivLoginContent>
            </Container>
          </section>
        </div>
      </DivBackground>
    </BodyLogin>

  )
}

