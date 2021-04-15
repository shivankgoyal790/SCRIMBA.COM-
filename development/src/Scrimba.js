import React from "react"
import "./scrimba.css"
import Logo1 from "E:/react_practice/development/src/Images/dark-logo (1).svg";
import Logo2 from "E:/react_practice/development/src/Images/peep-guy-macbook.svg";
import Logo3 from "E:/react_practice/development/src/Images/peep-girl-wheelchair.svg";
import Logo4 from "E:/react_practice/development/src/Images/peep-man-bearded.svg";
import Cardsofcards from "E:/react_practice/development/src/Components/Cardsofcards.js";

class Scrimba extends React.Component {


    
    myfunction1 = () =>{
        var x=window.pageYOffset;
        var y = document.getElementById("nav");
        if( x > 0)
        
            y.style.display = "none";
        }

render(){
    return(
        <div id="main" onScroll={() => this.myfunction1()}>
            
                <div id="nav">
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
                <p className="line1">Don't spend $15,000</p>
                <p className="line2">on a coding</p>
                <p className="line3">bootcamp</p>
                <p className="line4">Our career path helps motivated students become</p>   
                <p className="line5">hireable frontend developers for <b>1% of the cost</b></p>
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
            <Cardsofcards />


        </div>

    
        </div>

       
    );
}


}


export default Scrimba