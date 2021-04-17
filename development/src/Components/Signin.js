import React from "react";
import "./Signin.css";

const Signin = () =>{
return(
<div className="signinback" id="sign" >
    <button className="btn8"> sign up with gitHub</button>
    <div className="email">
    ______________or with email_____________</div>
    <input className="input" type="text" placeholder="Email" />
    <input  className="input" type="text" placeholder="password"  />
    <button className="btn9" >Sign In</button>
    <p><span className="line8">Having issues signing in?</span><a href="https://www.google.com/search?q=clear+cookies"> Clearing your cookies will resolve it</a></p>
    <hr/>
    <span className="newhere">New here? <a href="asd">Sign Up</a></span>
    <span className="forgot"><a href="D">Forgot password?</a></span>
</div>

);
}

export default Signin;