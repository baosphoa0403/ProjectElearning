import React from "react";
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
import { useForm } from "react-hook-form";
interface InputSignUp {
  taiKhoan: string,
  matKhau: string,
  hoTen: string,
  soDT: string,
  maNhom: string,
  email: string,
  errorInput: string,
}
function SignUp() {
  const { register, handleSubmit, errors } = useForm<InputSignUp>();
  const onSubmit = (data: InputSignUp) => {
    alert(JSON.stringify(data, null));
  };
  return (
    <BodySignUp>
      <DivBackground>
        <Container maxWidth="sm">
          <DivSignUpContent>
            <form id="signup-form" className="signup-form" onSubmit={handleSubmit(onSubmit)}>
              <H2SignUp>Create account</H2SignUp>

              <DivFormGroup>
                <InputFormSignUp type="text" placeholder="Your Email" ref={register}/>
              </DivFormGroup>

              <DivFormGroup>
                <InputFormSignUp type="text" placeholder="Account" ref={register}/>
              </DivFormGroup>
              <DivFormGroup>
                <InputFormSignUp type="password" placeholder="Password" ref={register} />
              </DivFormGroup>

              <DivFormGroup>
                <InputFormSignUp type="text" placeholder="Your Name" ref={register} />
              </DivFormGroup>
              <DivFormGroup>
                <InputFormSignUp type="text" placeholder="Phone Number" ref={register}/>
              </DivFormGroup>

              <DivFormGroup>
                <InputFormSignUp type="text" placeholder="Code Group" ref={register}/>
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

export default SignUp;
