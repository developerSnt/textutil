import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log ("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setTex(newtext)
        props.showalert("Convert to Uppercase", "primary");
    }
    const handleloClick =()=>{
        console.log ("Lowercasecase was clicked" + text);
        let newtext = text.toLowerCase();
        setTex(newtext)
        props.showalert("Convert to Lowercase", "warning");
    }
    const handleonClick =(event)=>{
       // console.log ("on change")  ;
        setTex(event.target.value);
        
    }
    const handleclearClick =()=>{

        let newtaxt = '';
        setTex(newtaxt)
        props.showalert("Text Clear", "info");
    }
   const handlecopyClick = () => {
     var text1 = document.getElementById("mytextbox");
     text1.select();
     navigator.clipboard.writeText(text1.value);
     document.getSelection().removeAllRanges();
     props.showalert("Copy to0 clipboard", "dark");
   }
   const removespace = () => {
      let newText = text.split(/[ ]+/);
      setTex(newText.join(" "))
      props.showalert("Remove Space the Extra Space", "success");
   }
    const [text, setTex] = useState('');
   // setTex("new Text"); //Coreect Way to change the State
  return (
    <>
    <div>
      
<div className="container my-3 " style={{color:props.modes==='dark'?'white':'black'}}>
 <h1 className="mb-4">{props.heading}</h1>
  <textarea className="form-control" id="mytextbox" value={text} onChange={handleonClick} style={{backgroundColor:props.modes==='dark'?'#13466e':'white', color:props.modes==='dark'?'white':'black'}}rows="8"></textarea>
</div>
  <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert Text In Uppercase</button>
    &nbsp;  &nbsp; &nbsp; 
  <button disabled={text.length===0} className="btn btn-success my-1" onClick={handleloClick}>Convert Text In Lowercase</button>
  <button disabled={text.length===0} className="btn btn-warning mx-4 my-1" onClick={handleclearClick}>Clear</button>
  <button disabled={text.length===0} className="btn btn-warning mx-4 my-1" onClick={handlecopyClick}>Copy</button>  
  <button disabled={text.length===0} className="btn btn-warning mx-4 my-1" onClick={removespace}>Remove spaces</button>  
    </div>  
    <div className="container my-3" style={{color:props.modes==='dark'?'white':'black'}}>
        <h1>your Text Summary</h1>
        <p> {text.split(/\s+/) .filter((element)=>{return element.length!==0}).length} : Words and {text.length} : Characters</p>
    <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} : Minutes read</p>
    <h2>Preview</h2>
    {text.length>0?text:"Nothing to preview!"}
    </div>
    </>
  )
}
