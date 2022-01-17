            
import React from "react";
 import {  ButtonGroup, StyledContainer,ExtraText, StyledFormArea} from "./../components/Styles";

import logo from "../assets/logo.png";

import styles from "./LandingPage.module.css";




import { BackgroundSlideshow } from "./backgroundSlider/BackgroundSlider";
import {  useHistory, useParams} from "react-router-dom";

 function EmailSent() {
  const history = useHistory();
  const {userEmail} = useParams();

  return (
    <StyledContainer>
      <StyledFormArea>
    <div>
    <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.landing}>
        <div className={styles.welcome}>
      <p>An email with your account confirmation link has been sent to your email: <b> {userEmail}</b></p></div>
      <ExtraText>Check your email and come back to proceed</ExtraText>
<ButtonGroup>
  
<button  to = {`/login/${userEmail}`}>
  Proceed
</button>
</ButtonGroup>
       
          
      </div>
      <BackgroundSlideshow className={styles["image-slider"]} />
    </div>
    </StyledFormArea></StyledContainer>
  );
}

export default  EmailSent;
