import React from "react";
import "./Signin.css";

const Signup = () =>{
return(
<div className="signinback" id="sign" >
    <button className="btn8"> sign in/up with gitHub</button>
    <div className="email">
    __________or register with email_________</div>
    <input className="input" type="text" placeholder="Email" />
    <input  className="input" type="text" placeholder="Name"  />
    <input  className="input" type="text" placeholder="password"  />
    <button className="btn9" >Sign Up</button>
   
    <hr/>
    <span> Have an account<a href="bug">Sign In</a> <a href="D">Forgot password?</a></span>
</div>

);
}

export default Signup;