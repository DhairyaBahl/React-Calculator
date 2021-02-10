import './App.css';
import {useState,useEffect} from 'react';
//import {evaluate} from 'mathjs'

function App() {

  const [input,setInput]=useState("");

  const equal=(event)=>{
    setInput(eval(input))
  }

  const percentage=(event)=>{
    setInput(input+"/100");
  }

  return (
    <div className="App">
    <h1><span style={{color:"#ff6ec7"}} >My</span><span style={{color:"orange"}} > Calculator</span><span style={{color:"#ff6ec7"}} > App</span></h1>
    <nav><h1 className="input" >{input}</h1></nav>
    {/*here i am creating the new features, this may break the app so bye*/}
    <div className="num_div" >
    <button onClick={event=>setInput(input+"9")} className="row2 col1" ><h2 className="num" >9</h2></button>
    <button onClick={event=>setInput(input+"8")} className="row2 col2" ><h2 className="num" >8</h2></button>
    <button onClick={event=>setInput(input+"7")} className="row2 col3" ><h2 className="num" >7</h2></button>
    <button onClick={event=>setInput(input+"6")} className="row3 col1" ><h2 className="num" >6</h2></button>
    <button onClick={event=>setInput(input+"5")} className="row3 col2" ><h2 className="num" >5</h2></button>
    <button onClick={event=>setInput(input+"4")} className="row3 col3" ><h2 className="num" >4</h2></button>
    <button onClick={event=>setInput(input+"3")} className="row4 col1" ><h2 className="num" >3</h2></button>
    <button onClick={event=>setInput(input+"2")} className="row4 col2" ><h2 className="num" >2</h2></button>
    <button onClick={event=>setInput(input+"1")} className="row4 col3" ><h2 className="num" >1</h2></button>
    <button onClick={event=>setInput(input+"0")} className="row5 col2" ><h2 className="num" >0</h2></button>
    <button onClick={event=>{setInput(input+"00")}} className="row5 col1" ><h2 className="num" >00</h2></button>
    </div>
    <button onClick={event=>setInput("")} className="row1 col1" ><h2 className="clear" >{"C"}</h2></button>
    <button onClick={event=>setInput(input.slice(0,input.length-1))} className="row1 col2" ><h2 className={"clear"} >{"<--"}</h2></button>
    <button onClick={percentage} className="row1 col3" ><h2 className="maths" >%</h2></button>
    <button onClick={equal} className="row1 col4" ><h2 style={{color:"#00ffff"}} className="clear" >=</h2></button>
    <button onClick={event=>setInput(input+"+")} className="row2 col4" ><h2 className="maths" >+</h2></button>
    <button onClick={event=>setInput(input+"-")} className="row3 col4" ><h2 className="maths" >--</h2></button>
    <button onClick={event=>setInput(input+"*")} className="row4 col4" ><h2 className="maths" >x</h2></button>
    <button onClick={event=>setInput(input+".")} className="row5 col3" ><h2 className={"num"} >{"."}</h2></button>
    <button onClick={event=>setInput(input+"/")} className="row5 col4" ><h2 className="maths" >/</h2></button>
    </div>
  );
}

export default App;
