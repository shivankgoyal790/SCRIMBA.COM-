import React from "react"
import "./scrimba.css"
import Logo1 from "E:/react_practice/development/src/Images/dark-logo (1).svg";
import Logo2 from "E:/react_practice/development/src/Images/peep-guy-macbook.svg";
import Logo3 from "E:/react_practice/development/src/Images/peep-girl-wheelchair.svg";
import Logo4 from "E:/react_practice/development/src/Images/peep-man-bearded.svg";
import logo5 from "E:/react_practice/development/src/Images/video.jpg";
import logo6 from "E:/react_practice/development/src/Images/founders.jpg";
import Cardsofcards from "E:/react_practice/development/src/Components/Cardsofcards.js";
import logo7 from "E:/react_practice/development/src/Images/shape-light-coral-edge-bottom.svg"
import Discord from "E:/react_practice/development/src/Components/Discord.js";

class Scrimba extends React.Component {
render(){
    return(
        <div id="main">
            
                <div className="nav">
                    <span>
                        <img className="logo1" src={Logo1} alt="logo1" />
                    </span>
                    
                    <span className="navbar">
                        <ul className="list1">
                            <li className="pro">Go Pro!</li>
                            <li className="btn1">All Courses</li>
                            <li className="btn2">Sign In</li>
                            <li className="btn3">Sign Up</li>
                        </ul>

                        
                    </span>
                </div>

            <div className="my">
                <span className="heading1">
                <div className="line1">Don't spend $15,000 on a coding bootcamp </div>
                <div className="line4">Our career path helps motivated students become hireable frontend developers for <b>1% of the cost</b></div>
                <br /><p><button className="btn4">Try It Out Now!</button> </p>
                </span>
                <span className="imageheading">
                <img className="logo2" src={Logo2} alt="logo2"/> 
                </span>
        </div>
            
        <div className="flex-container1">
            <span className="flex-content1"> <img className="wheelchair" src={Logo3} alt="logo3"/></span>
            <span className="flex-content2"> <img className="beardedman" src={Logo4} alt="logo4" /></span>
            <span className="flex-content3">
                    <span className="heading2">
                       <p className="line6">A   coding community<br/>
                       like no other</p>
                    </span>
                    <span className="heading4">
                    <p>Not a boring forum. But live events,<br/> stand-ups, competitions, and more.</p>

                    </span>
                    
            </span>
                
            <span className="flex-content4">
                    <span className="heading3">
                       <p className="line6">A mind-blowing way<br/>
                       to learn to code</p>
                    </span>
                    <span className="heading4">
                        <p>Our interactive code-learning tool<br/>  has been blowing minds since 2017. </p>
                    </span>
                </span>
           
        </div>
        <div>
            <Cardsofcards />
        </div>
        <div>
             <Discord />
        </div>
        <div>
                <div className="flex-container3">
                    <div className="flexbox1">
                    <img className="videoimage" src={logo5} alt="hi" />
                    </div>
                    <div className="flexbox2">
                      <h1>About the platform </h1>
                      <p>Scrimba is the next-generation platform for learning how to code. Our screencasts
                       enable you to interact with the code directly in the player. 
                      This way, you'll have more fun and learn faster.</p>
                      <p>Our courses cover subjects like HTML, CSS, JavaScript, React, Vue, and more.
                       They're all made with the goal of advancing your career. So pick a course and give your career a boost!</p>
                    </div>
                </div>

                <div className="flex-container4">
                    <div className="flexbox3">
                        <h1>
                            Hi! from the founders
                        </h1>
                        <p>
                        Our goal is to create the best possible coding school at the lowest possible cost for students.
                         If we succeed with this, it’ll give anyone who wants to become a software developer a realistic shot at succeeding. 
                        Regardless of where they live and the size of their wallets.
                        </p>
                        <div className="thought">
                        “To achieve this, we’ve created a new video format for code screencasts. We call it “scrims”.
                        </div>
                        <p>
                        This format is the backbone of our school. Not only because it results in a superior learning experience. 
                        But also because it enables us to iterate more quickly, to attract better teachers, 
                        to facilitate better peer-learning, to keep server costs low, and much more.
                        </p>
                    </div>
                    <div className="flexbox4">
                        <img className="founders" src={logo6} alt="hi" /> 
                        <p className="text">Sindre & Per</p>
                        <p>Connect with us on Twitter</p>
                        <button className="btn7">Say Hi @Sindreaars</button><br /><br />
                        <button className="btn7">Say Hi @Perborgen</button>
                    </div>

                 </div>   
        </div>
                    <footer>
                        <img className="bottom" src={logo7} alt="hi" />
                        <div>
                        <div className="col1">
                                <p> <img className="logo1" src={Logo1} alt="scrimba"/></p>
                            <ul className="list2">
                         
                               <li> Home</li> 
                               <li> Discord</li>
                               <li>Twitter</li>
                               <li>YouTube</li>
                            </ul>
                        </div>
                        <div className="col2">
                            <h3> Resources</h3>
                            <ul className="list2">
                                 <li>Blog</li>
                                <li>FAQ</li>
                                <li>Terms</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                        <div className="col2">
                                <h3>Courses</h3>
                            <ul className="list2">
                              
                                <li>All courses</li>
                                <li>Intro courses</li>
                                <li>Learn JavaScript</li>
                                <li>Learn React</li>

                                
                            </ul>
                        </div>
                        <div className="col2">
                            <h3>Company</h3>
                            <ul className="list2">
                                
                                <li>About us</li>
                                <li>Contact us</li>
                                <li>Support chat</li>
                                <li>Gift membership</li>
                            </ul>
                        </div>

                        <p className="lastline"> Build By <b>Shivank</b>  </p>
                        </div>
                    </footer>
               
  

    
        </div>

       
    );
}


}


export default Scrimba