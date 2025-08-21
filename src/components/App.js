import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[display,setDisplay]=useState(false)

  const handleParagraph=()=>{
    setDisplay(prev=>!prev)
  }
  return (
    <div id="main">
       <button id="click" onClick={handleParagraph}>button</button>
       { display &&(
       <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
       }
    </div>
  );
}


export default App;
