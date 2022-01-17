import React , { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import { LandingPage } from "./landingPage/LandingPage";
import EmailSent from "./landingPage/EmailSent";
import Search  from "./search/Search";
import Login from "./landingPage/Login";
import Signup from "./landingPage/Signup";
import Dashboard from "./landingPage/Dashboard";
//import { StyledContainer } from "./components/Styles";

//Loading css

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import {connect} from "react-redux";


function App() {
  const [isAuth, setAuth] = useState(false);

  const checkAuth = () => {
     // Your auth logic here
     setAuth(true);
  };

  useEffect(() => {
    checkAuth();
  });

  return (
    <div className="App">
   <Router>
      <Switch>
        <Route
          path="/dashboard"
          render={(props) =>
            isAuth ? <Dashboard {...props} /> : <Redirect to="/login" />
          }
        />
    
   
     
      <Route path="/login/:userEmail?" component={Login} />
      <Route path="/emailsent:userEmail?" component={EmailSent} />
      <Route path="/signup" component={Signup} />
      <Route path="/search" component={Search} />
       <Route path="/" component={LandingPage} />
      </Switch>
      </Router>
    </div>
    
  );
}
const mapStateToProps = ({session}) => ({
   checked: session.checked
})

export default connect (mapStateToProps) (App);
