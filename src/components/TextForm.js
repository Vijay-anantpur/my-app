
import React, { useState } from 'react';
export default function TextForm(props) {

    const handleUpClick=()=>{
        //console.log("Upper case change was clicked")
        let newtext=Text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UPPERCASE!!","Success, ")
        
    }
    const handleDownClick=()=>{
        //console.log("Upper case change was clicked")
        let newtext=Text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to lowercase!!","Success, ")
        
    }
    const handleClearClick=()=>{
      setText("")
      props.showAlert("Cleared Text","") 
  }

    const handleOnChange=(event)=>{
        // console.log("On change"); 
        setText(event.target.value)
    }
    
    //here Text is  variable and setText is function 
    const [Text, setText] = useState("Enter text here "); //state
    //text="gghgfhgghh"  wrong way to update text 
    
  return (
    <>
    <div>
        <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
</div> 
    <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to uppercase </button>
    <button className="btn btn-info mx-2" onClick={handleDownClick}>Convert to Lowerrcase</button>
    <button className="btn btn-dark" onClick={handleClearClick}>Clear Text</button>
    
    </div>
    <div className="container">
      <h2>Your text summary</h2>
        <p>Your text contains {Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} minutes read</p>
    </div>
    </>
  )
}
