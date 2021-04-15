import React from "react"
import Cards from "E:/react_practice/development/src/Components/Cards.js"
import "./Cardscontainer.css";
const Cardscontainer = (props) => {
    return(
<div className="card-container" style={ {backgroundColor:props.backcolor}}>

<center><h1 className="cardheading1"> {props.head1}</h1></center>
<center><h3 className="cardheading2">{props.head2}</h3></center>
<div className="cardsrow">
<span className="cardsalign"><Cards cardhead={props.cardhead1} lesson={props.lesson1} hour={props.hour1} author={props.author1} img_src={props.img1} level={props.level1}/></span>
<span className="cardsalign"><Cards cardhead={props.cardhead2} lesson={props.lesson2} hour={props.hour2} author={props.author2} img_src={props.img2} level={props.level2} /></span>
<span className="cardsalign"><Cards cardhead={props.cardhead3} lesson={props.lesson3} hour={props.hour3} author={props.author3} img_src={props.img3} level={props.level3}/></span>
<span className="cardsalign"><Cards cardhead={props.cardhead4} lesson={props.lesson4} hour={props.hour4} author={props.author4} img_src={props.img4} level={props.level4}/></span>
</div>
<br></br><br></br>
<center>
<span><button className="btn6">See All</button></span>
</center>



</div>

    );

}

export default Cardscontainer;