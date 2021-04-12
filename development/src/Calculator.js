import React from 'react'
import "./calculator.css"
/*import logo from "G:/react_practice/development/src/Components/images/images.png"*/

var y = "";
var x;
var b = "";
var c = "";
var k;
var sol = 0;

class Calculator extends React.Component {
    
    shoot = (a) => {

        if(a==="C" || a==="CE")
        {
            document.getElementById("inpt").value = "";
            document.getElementById("inpt").placeholder = "0";
            y = "";
        }

        else if (a === "sq")
        {
            document.getElementById("inpt").value = Math.sqrt(Number(y));
            y =  document.getElementById("inpt").value ;
        }

        else if (a === "1/x"){
            y =  document.getElementById("inpt").value ;
            y = 1 / y;
            document.getElementById("inpt").value = y;
            

        }

        else if (a === "+-"){
            y =  document.getElementById("inpt").value;
            y = y - 2*y;
            document.getElementById("inpt").value = y;

        }

        else if(a === "x"){
            var stn = document.getElementById("inpt").value ;
            document.getElementById("inpt").value = stn.substring(0,stn.length-1);
            y=  document.getElementById("inpt").value;
        }


     

        else 
        {

            if (a === "+" || a === "+-" || a === "=" ||  a === "%" || a === "*" || a === "/" || a === "1/x")
            {
                if(y.length === 0){
                 document.getElementById("inpt").value = 0;
                }
            }    

            if(a !== "+" && a !== "+-" && a !== "=" && a !== "-" && a !== "%" && a !== "*" && a !== "/" && a !== "1/x" && a !== "sq"){
                    document.getElementById("inpt").value += a;
                    y =  document.getElementById("inpt").value;
            }

            
            else
            {
                document.getElementById("inpt").value += a;
                y = document.getElementById("inpt").value;
                b = "";
                c = "";
                for(k = 0; k < (y.length); k++)
                {
                    
                    if( (y[k] === '+' ||  y[k] === '-' || y[k] === '*' ||  y[k] === '/') && k > 0)
                    {
                        x = y[k];
                        break;
                    }    
                    else
                        b += y[k];
                   
                } 
                    for ( var i = k+1 ;i < y.length -1 ; i++)
                    {
                        c += y[i];
                    }

                    if(a === "%")
                    {
                        if(x === "+"){
                            sol = Number(b) + Number(b)*Number(c)/100;
                            y= sol.toString();
                            document.getElementById("inpt").value = y;

                        }

                        if(x === "-"){
                            sol = Number(b) - Number(b)*Number(c)/100;
                            y= sol.toString();
                            document.getElementById("inpt").value = y;

                        }
                        if(x === "*"){
                            sol = Number(b) * Number(b)*Number(c)/100;
                            y= sol.toString();
                            document.getElementById("inpt").value = y;


                        }

                        if(x === "/"){
                            sol = Number(b) / (Number(b)*Number(c)/100);
                            y= sol.toString();
                            document.getElementById("inpt").value = y;

                        }


                    }
                    else{
                    if(x === '+')
                    {
                        sol = Number(b) + Number(c);
                        y= sol.toString();

                        if(a !== "=")
                            y += a;
                        document.getElementById("inpt").value = y;
                    }
                    if(x === '-')
                    {
                        sol = Number(b) - Number(c);
                        y= sol.toString();
                        if(a !== "=")
                        y += a;
                        document.getElementById("inpt").value = y;
                    }
                    if(x === '*')
                    {
                        if(c.length <= 0)
                            c = 1;
                        sol = Number(b) * Number(c);
                        y= sol.toString();
                        if(a !== "=")
                        y += a;
                        document.getElementById("inpt").value = y;
                        
                    }

                    if(x === '/')
                    {
                        if(c.length <= 0)
                            c = 1;

                        sol = Number(b) / Number(c);
                        y= sol.toString();
                        if(a !== "=")
                        y += a;
                        document.getElementById("inpt").value = y;
                        
                    }
                }

                    





                
            }
            

            
        }


       /*
       
        else if(a !== "+" && a !== "+-" && a !== "=" && a !== "-" && a !== "%" && a !== "*" && a !== "/" && a !== "1/x" && a !== "sq"){
            document.getElementById("inpt").value += a;
            y =  document.getElementById("inpt").value;
        }

        else if( (a === "+" || a === "-" || a === "*" || a === "/" ) )
        {
            x = a;
            document.getElementById("inpt").value = "";
            document.getElementById("inpt").placeholder = y;
            z = y;
            y = "";
            
        }

        else if(a === "1/x")
        {
            document.getElementById("inpt").value = 1 / Number(y);
            y=  document.getElementById("inpt").value;
        }

        else if(a === "+-"){

                 y= Number(y) - 2*Number(y);
                document.getElementById("inpt").value = y;
                
        }



        else if(a === "=" ){
            
            if(x === "+"){
                document.getElementById("inpt").value = Number(y) + Number(z);
                b =  Number(y)+ Number(z);
                y= b.toString();
                
            }
            if(x === "-")
            {
                document.getElementById("inpt").value = Number(z) - Number(y);
                c = Number(z) - Number(y)
                y = c.toString();
            }

            if(x === "/")
            {
                document.getElementById("inpt").value = Number(z) / Number(y);
                c=Number(z)/Number(y);
                y = c.toString();
            }

            if(x === "*")
            {
                document.getElementById("inpt").value = Number(z)*Number(y);
                c=Number(z)*Number(y)
                y = c.toString();
            }

        }


        
        else if(a === "%" ){
            if(x === "+"){
                document.getElementById("inpt").value = Number(z) + Number(z)*Number(y)/100;
                b=  Number(z) + Number(z)*Number(y)/100;
                y = b.toString();
            }
            if(x === "-")
            {
                document.getElementById("inpt").value = Number(z) - Number(z)*Number(y)/100;
                c= Number(z) - Number(z)*Number(y)/100;
                y = c.toString();
            }

            if(x === "/")
            {
                document.getElementById("inpt").value = Number(z) / (Number(z)*Number(y)/100);
                c=  Number(z) / (Number(z)*Number(y)/100);
                y = c.toString();
            }

            if(x === "*")
            {
                document.getElementById("inpt").value = Number(z)*Number(y)/100;
                c=Number(z)*Number(y)/100;
                y = c.toString();
            }

        }*/


      

    }
   render(){

    return(

        <div>
                <div className="container">
                    
                
                    <input type="text" id="inpt" value="&#x00A;" placeholder="0"></input>
                    <br/><br/>
                    <div className="flex-container">
                        <div className="btn">M</div>&emsp;
                        <div className="btn" onClick = {() => this.shoot("CE")}>CE</div>
                        <div className="btn" onClick = {() => this.shoot("C")}>C</div>
                        <div className="btn"  onClick = {() => this.shoot("x")}>&#9876;</div>
                        <div className="btn" onClick = {() => this.shoot("/")}> &#xf7;</div>
                        
                        
                        
                    </div>
                    
                    <div className="flex-container">
                        <div className="btn" onClick = {() => this.shoot("+-")}> &#xb1; </div>&emsp;
                        <div className="btn" onClick = {() => this.shoot("7")} >7 </div>
                        <div className="btn" onClick = {() => this.shoot("8")}>8</div>
                        <div className="btn" onClick = {() => this.shoot("9")}>9</div>
                        <div className="btn"  onClick = {() => this.shoot("*")}>&times;</div>
                        <br/>
                        
                        
                    </div>

                         
                    <div className="flex-container">
                        <div className="btn" onClick = {() => this.shoot("sq")}>&radic;</div>&emsp;
                        <div className="btn" onClick = {() => this.shoot("4")}>4</div>
                        <div className="btn" onClick = {() => this.shoot("5")}>5</div>
                        <div className="btn" onClick = {() => this.shoot("6")}>6</div>
                        <div className="btn" onClick = {() => this.shoot("-")}>-</div>
                        <br/>
                        
                        
                    </div>

                         
                    <div className="flex-container">
                        <div className="btn" onClick = {() => this.shoot("%")}>%</div>&emsp;
                        <div className="btn" onClick = {() => this.shoot("1")}>1</div>
                        <div className="btn" onClick = {() => this.shoot("2")}>2</div>
                        <div className="btn" onClick = {() => this.shoot("3")}>3</div>
                        <div className="btn" onClick = {() => this.shoot("+")}>+</div>
                        <br/>
                        
                        
                    </div>

                    <div className="flex-container">
                        <div className="btn" onClick = {() => this.shoot("1/x")}>1/x</div>&emsp;
                        <div className="btn2" onClick = {() => this.shoot("0")}>0</div>
                        <div className="btn" onClick = {() => this.shoot(".")}>.</div>
                        <div className="btn1"  onClick = {() => this.shoot("=")}>=</div>
                        <br/>
                        
                        
                    </div>
                    
                    
                </div>
        </div>

    
    );

    
    }

}   


export default Calculator