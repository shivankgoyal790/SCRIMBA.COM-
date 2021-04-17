import React from "react"
import "./Discord.css"
import logo2 from "E:/react_practice/development/src/Images/shape-coral.svg"
import logo from "E:/react_practice/development/src/Images/shape-light-coral.svg"
import logo3 from "E:/react_practice/development/src/Images/peep-crowd.svg"

const Discord = () => {
    return(
        <div className="discordback">
            <div className="backimage1">
                    <img  className="img1" src={logo} alt="backimage1" />
                <div className="backimage2">
                    <img className="img2" src={logo2} alt="backimage2" />
                <div className="discordcontainer">
                    <h1 className="heading6">
                        Join our Discord Chat
                    </h1>
                    <p className="para9">1000+ online now</p>
                    <button className="btn7">Enter Chat</button>
                    <br />
                    <img src={logo3} alt="poeple"></img>
                </div>

                </div>
            </div>
        </div>
    );
}

export default Discord