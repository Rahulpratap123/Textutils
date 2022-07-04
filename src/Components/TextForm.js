import React,{useState} from 'react'

export default function TextForm(Props) {

  const handleupclick=()=>{
    console.log("uppercase was clicked" + text);
    let newText =text.toUpperCase();
    setText(newText)
  }

  const handleloclick=()=>{
    console.log("lowercase was clicked" + text);
    let newText =text.toLowerCase();
    setText(newText)
  }
  
  const handleclearclick=()=>{
    console.log("lowercase was clicked" + text);
    let newText ='';
    setText(newText)
  }
  
  const handleonChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const handleCopy =()=>{
    var text =document.getElementById("myBox");
    text.select();
    navigator.clipboard.write(text.value);
  }
  const handleExtraSpaces =()=>
  {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState('');
  //setText("newtext");//correct way to change the text state
  return (
    <>
      <div className="container" style={{color:Props.mode==='dark'?'white':'black'}} >
          <h1>{Props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:Props.mode==='dark'?'gray':'white',color:Props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-danger mx-2" onClick={handleupclick}>convert to upper case</button>
  <button className="btn btn-success mx-2" onClick={handleloclick}>convert to lower case</button>
  <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
  <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-success mx-2" onClick={handleclearclick}>clear Text</button>



      </div>
      <div className="container my-3"style={{color:Props.mode==='dark'?'white':'black'}} >
        <h2>Your summary </h2>
        <p> {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim().length } characters characters</p>
        <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter text to Preview Here "}</p>
      </div>
      </>
  )
}  
