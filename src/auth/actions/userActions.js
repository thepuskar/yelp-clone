import axios from "axios";
import { sessionService } from "redux-react-session";


 //the remote endpoint  and local
const remoteUrl ="https://desolate-lake-37755.herokuapp.com/";
const localUrl = "http://localhost:5000/";
const  currentUrl = localUrl;

export const loginUser = (credentials, history, setFieldError, setSubmitting) => {
   //make checks and get some data

  


return () => {

   axios.post(`${currentUrl}user/signin`,
   credentials,
   {
       headers:{
           "Content-Type": "application/json"
       }
   }
   ).then((response) =>{
       const{data} = response;
       if (data.status === "FAILED" ) {
           const {message}= data;

           //check for specific error
           if(message.includes("credentials")){
               setFieldError("email", message);
               setFieldError("password", message);
           } else if (message.includes("password")){
               setFieldError("password", message);
           } else if (message.toLowerCase().includes("email")){
            setFieldError("email", message);
        }

       } else if (data.status === "SUCCESS") {
           const userData = data.data[0]
 
           const token = userData._id;

           sessionService
           .saveSession(token)
           .then(()=> {
               sessionService
               .saveUser(userData).then(()=> {
                history.push("/dashboard");
               })
               .catch((err) => console.error(err));

           }).catch((err) => console.error(err));
         
       }

       //complete form submission
      setSubmitting(false); 


   }).catch((err) => console.error(err));
}
   
}


export const signupUser = (credentials, history, setFieldError, setSubmitting) => { 
    return (dispatch) => {
    axios.post(`${currentUrl}user/signup`,
   credentials,
   {
       headers:{
           "Content-Type": "application/json"
       }
   }
   ).then((response) => {
       const {data} = response;

       if (data.status === "FAILED" ){
           const {message} = data;

           //checking for specific error
        if (message.includes ("name")) {
            setFieldError("name", message);
        }   else if (message.includes("email")){
            setFieldError("email", message);
        }else if (message.includes("date")){
            setFieldError("dateOfBirth", message);

        }else if (message.includes("password")){
            setFieldError("password", message);
        }

      


       }else if (data.status === "PENDING"){


      //DISPLAY MESSAGE FOR EMAIL VERIFICATION


        const { email } = credentials;
         history.push(`/emailsent/${email}`);
       


       }
         //complete submission
         setSubmitting(false);
   }).catch((err) => console.error (err));
   }
};

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        history.push("/");

    }

};
