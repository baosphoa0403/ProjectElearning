import React from 'react'
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
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
import { connect } from "react-redux";
import * as action from "./Modules/Actions/Action";
interface Inputs {
   taiKhoan: string, 
   matKhau: string,
   errorInput: string
}


 function Login(props: any) {
  const { register, handleSubmit, errors } = useForm<Inputs>({
    mode: "onBlur"
  });
  
  const onSubmit = (data: Inputs) =>{
    props.getListCourses(data, props.history)
  }
  const emitRoute = () => {
   props.history.push("/signUp")
  }
  return (
    <BodyLogin>
      <DivBackground>
        <div className="main-login">
          <section className="login">
            <Container maxWidth="sm">
              <DivLoginContent>
                <form id="login-form" className="login-form" onSubmit={handleSubmit(onSubmit)}>
                  <H2Login>USER LOGIN</H2Login>
                  <DivFormGroup>
                    <InputFormLogin name="taiKhoan" type="text" placeholder="Account" ref={register({required: "Please enter your Account"})}
                    style={{borderColor: errors.taiKhoan && "red"}}
                    />
                     {errors.taiKhoan && <p style={{color: "red"}}>{errors.taiKhoan.message}</p>}
                  </DivFormGroup>
                  <DivFormGroup>
                    <InputFormLogin name="matKhau" type="password" placeholder="Password" ref={register({required: "Please enter your Password"})}
                     style={{borderColor: errors.matKhau && "red"}}
                    />
                    {errors.matKhau && <p style={{color: "red"}}>{errors.matKhau.message}</p>}
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
                    onClick={()=>{emitRoute()}}
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
const mapDispatchToProps = (dispatch: any) => {
  return {
    getListCourses: (data: any, history: any) => {
      dispatch(action.actSignInAPI(data, history));
    },
  };
};
export default connect(null, mapDispatchToProps)(Login)

