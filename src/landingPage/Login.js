import React from "react";
import {  StyledFormArea, StyledFormButton,Avatar, StyledTitle, colors,ButtonGroup, ExtraText, TextLink, CopyrightText} from "../components/Styles";
import { StyledContainer } from "../components/Styles";
import Logo from "../assets/logo.png";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
//icons

import {FiMail, FiLock} from "react-icons/fi";
 

//import Loader from "react-loader-spinner";

//auth & redux
import {connect} from "react-redux";
import {loginUser} from "../auth/actions/userActions";
import {useHistory, useParams} from "react-router-dom";


const Login = ({loginUser}) =>{

  const history = useHistory();
  const {userEmail} = useParams();
  return (
    <StyledContainer>
      <div>
        <StyledFormArea>
          <Avatar image={Logo}/>
          <StyledTitle  color= {colors.theme}size= {30}>
            Login Page
          </StyledTitle>
          <Formik 
          initialValues={{
            email:userEmail,
            password:"",
          }}
          validationSchema={
            Yup.object({
              email:Yup.string().email("Invalid email address")
              .required("Required"),
              password: Yup.string().min(8,"Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
            })
          }
              onSubmit={(values, {setSubmitting, setFieldError}) => {
                console.log(values);
                loginUser(values, history, setFieldError, setSubmitting);
              }
              }>
            {({isSubmitting}) => (
              <Form>
                <TextInput
                    name="email"
                    type="text"
                    label="Email Address"
                    placeholder="myfixup@example.com"
                    icon={<FiMail/>}
                />
                <TextInput
                 name="password"
                 type="password"
                 label="Password"
                 placeholder="***********"
                 icon={<FiLock/>}
                />
                <ButtonGroup>
              
                  <StyledFormButton type="submit" > Login
                  </StyledFormButton>
                  
              
                  
                


                  
                </ButtonGroup>

              </Form>
            )}
          </Formik>
          <ExtraText>
            New here? <TextLink to= "/signup">Signup</TextLink> 
          </ExtraText>
        </StyledFormArea>
        <CopyrightText>
          All rights reserved &copy;2022 
        </CopyrightText>
      </div>
    
     </StyledContainer>
  );
};


export default  connect (null, {loginUser}) (Login);
