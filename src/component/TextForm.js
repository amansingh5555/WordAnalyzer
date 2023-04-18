import React , {useState} from "react"

export default function TextForm(props) {
  const handleUpClick = () =>{
  let newText = text.toUpperCase();
  setText(newText)
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const[text,setText] = useState('');
  return (
    <>
    <div> 
        <h1>{props.heading}</h1>
        <div className = "mb-3">
        <textarea className = "form-control" value= {text} onChange= {handleOnChange}  placeholder="Enter text here..."    id="myBox" rows="8"></textarea>
    </div>
    <div className = "btn btn-primary mx-3 " onClick={handleUpClick}>Convert to Upper Case</div>
    <div className = "btn btn-primary" onClick={handleLoClick}>Convert to Lower Case</div>
    </div>
    <div className="container my-3" > 
    <h2>Your Text Summary Count </h2>
    <p> { text.split(" ").length }  words and {text.length} characters   </p>
    <p>  { 0.008 *text.split(" ").length }Minutes should be taken to read </p>
    <h2>Preview</h2>   
    <p>{text}</p>

    </div>
    </>
  )
  
}
