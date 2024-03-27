import React,{useState} from "react";

import React from 'react'

export default function callback({getColor}) {
    const[activecolor,setActiveColor] = useState(null);
    const handleChange = (e)=>{
        const {value} = e.target;
        setActiveColor(value);
        getColor(value);
    };
    return (

      <input
        type="text"
        id="input"
        aria-label="input"
        onChange={handleChange}
        value={activeColor}
        />

  );
};
