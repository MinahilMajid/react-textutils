import React,{useState} from 'react'

export default function TextForm(props) {
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleupclick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleloclick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleonchange=(event)=>{
        setText(event.target.value)
    }
const[text,setText]=useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3" >
  <textarea className="form-control" id="myBox" rows="7" onChange={handleonchange} value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleupclick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-3" onClick={handleloclick}>Convert To LowerCase</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} Minutes read </p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
</>
  )
}
