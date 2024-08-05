import { useState } from "react"
import React from 'react';
const Add=({setAddOn,TextBox,outputText})=>{
    const [list, setList] = useState([])
    return(
        <div className="row">
        <div className="submission" style={{ height: "50%", alignItems: "center", justifyContent: "flex-start"}}>
          
          <div style={{ height: "40%",width:"90%"}}>
            <label className="Addon-Text" >Want to submit a Translation?</label>
            <br></br>
            <br></br>
            <input type={TextBox} placeholder="Enter word in English"></input>
          </div>
          <br/><br/>
          <div style={{ height: "40%", width:"90%"}}>
            <label className="Addon-Text">Enter the Translation to above word</label>
            <br></br>
            <br></br>
          <input type={TextBox} placeholder="Enter Translation in Ukrainian"></input>
          <br></br>
          <br></br>
          <button className="add-on-submit" type="submit">Submit</button>
          </div>
        </div>
        <br/>
        <button className="addOn-back-button" onClick={()=>setAddOn(null)}>Back</button>
      </div>
     



        
         
    )
}

export default Add