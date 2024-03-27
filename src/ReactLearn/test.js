import React from 'react'
import { useState } from 'react'
import "./styles.css";

export default function NewApp() {
    const[UIcolor,seUIColor]=useState(null);
    //callback function
    const getColor =(color)=>{
        setUIColor(color);
    }
    return (
    <div className="App">
        <div
        className="App_color_container"
        style={{background:'${UIcolor}'}}>
    </div>
    <Callback getColor={getColor}/>
    </div>
  )
}
