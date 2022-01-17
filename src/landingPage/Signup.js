import React from "react";
import {  StyledFormArea, StyledFormButton,Avatar, StyledTitle, colors,ButtonGroup, ExtraText, TextLink, CopyrightText} from "../components/Styles";
import { StyledContainer } from "../components/Styles";
import Logo from "../assets/logo.png";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
//icons

import {FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";
 
//Loader


//auth & redux
import {connect} from "react-redux";
import {signupUser} from "../auth/actions/userActions";
import {useHistory} from "react-router-dom";


function Signup({signupUser}){
    const history = useHistory();
  return (
    <StyledContainer>
      <div>
        <StyledFormArea>
          <Avatar image={Logo}/>
          <StyledTitle  color= {colors.theme}size= {30}>
            Signup Page
          </StyledTitle>
          <Formik 
          initialValues={{
            email:"",
            password:"",
            repeatPassword:"",
            dateOfBirth:"",
            name:""
          }}
          validationSchema={
            Yup.object({
              email:Yup.string().email("Invalid email address")
              .required("Required"),
              password: Yup.string().min(8,"Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
              name: Yup.string().required("Required"),
              dateOfBirth:Yup.date().required("Required"),
              repeatPassword:Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords must match")
            })
          }
              onSubmit={(values, {setSubmitting,setFieldError}) => {
                signupUser(values,history, setFieldError,setSubmitting)
              }
              }>
            {({isSubmitting}) => (
              <Form>
                <TextInput
                    name="name"
                    type="text"
                    label="Full Name"
                    placeholder="Daniel Benson"
                    icon={<FiUser/>}
                />
                <TextInput
                    name="email"
                    type="text"
                    label="Email Address"
                    placeholder="myfixup@example.com"
                    icon={<FiMail/>}
                />
                <TextInput
                    name="dateOfBirth"
                    type="date"
                    label="Date of Birth"
                    icon={<FiCalendar/>}
                />
                <TextInput
                 name="password"
                 type="password"
                 label="Password"
                 placeholder="***********"
                 icon={<FiLock/>}
                />
                <TextInput
                 name="repeatPassword"
                 type="password"
                 label="Repeat Password"
                 placeholder="***********"
                 icon={<FiLock/>}
                />
                <ButtonGroup>
                  
                  <StyledFormButton type="submit"> Signup
                  </StyledFormButton>


                </ButtonGroup>

              </Form>
            )}
          </Formik>
          <ExtraText>
            Already have an account? <TextLink to= "/login">Login</TextLink> 
          </ExtraText>
        </StyledFormArea>
        <CopyrightText>
          All rights reserved &copy;2022 
        </CopyrightText>
      </div>
    
     </StyledContainer>
  )
}


export default connect (null, {signupUser}) (Signup);
