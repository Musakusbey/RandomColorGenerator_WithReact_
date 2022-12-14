import React, { useState } from 'react';
import './App.css'; 

const App = () => { 

  const [hex, setHex] = useState("#ffffff");  
  
  function randomHex(){
    const randomhex =  "#" + Math.floor(Math.random()*16777721).toString(16); 
    setHex(randomhex);
  }  
  return (     
    <div className='App' style={{backgroundColor:`${hex}`}}>
      <center> 
    <h1> {hex} </h1> 
    <button onClick={randomHex}> Click for new Background </button> 
    <button onClick={()=> navigator.clipboard.writeText(hex)}> Copy the hex value </button>
    </center> 
    </div> 
 
  ) 
}     

export default App

