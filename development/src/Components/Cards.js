import React from "react"
import "./card.css"
const Cards = (props) => {
return(
    <div className="card">
        <div className="cardheader">
        <p> {props.cardhead}</p>
        </div>
        <div className="oval-div">
            <div className="content1">
                <p className="p1">{props.lesson}<span className="hours"> {props.hour} </span></p>
                <p className="p2">with <b>{props.author}</b></p>

            </div>
            <div className="content2">
                <img src={props.img_src} alt="hi" className="imager" />
            </div>
        </div>
        <div className="foot">{props.level}</div>
    </div>

);

}


export default Cards;