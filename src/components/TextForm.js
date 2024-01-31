import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
      let newText=text.toUpperCase();
      setText(newText) // correct way to change the state
      props.showAlt("Converted to upper case", "success");
    }
    const handleLwClick=()=>{
      let newText=text.toLowerCase();
      setText(newText) // correct way to change the state
      props.showAlt("Converted to Lower case", "success");
    }
    const handleClearClick=()=>{
      let newText='';
      setText(newText) // correct way to change the state
      props.showAlt("Text is deleted!!", "success");
    }
    const handleCopyClick=()=>{
      navigator.clipboard.writeText(text);
      props.showAlt("Copied!!", "success");
    }
    const handleReExSpClick=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" ")) // correct way to change the state
      props.showAlt("Extra spaces are removed", "success");
  }
    const handleOnChange=(event)=>{
      setText(event.target.value)
    }
    // react hooks
  const [text,setText] = useState('');
  return (
    <>
      <div style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',
            color:props.mode==='dark'?'white':'black'}} id="myBox" rows="7"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleUpClick}>To Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleLwClick}>To Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleClearClick}>Clear all</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleCopyClick}>Copy all</button>
        <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleReExSpClick}>Remove Extra Spaces</button>
      </div>
    
      <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Text Summary</h3>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
      </div>
    </>
  )
}
