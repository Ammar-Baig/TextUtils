import React ,{useState} from 'react'


export default function TextForm(props) {
    const [Text, setText] = useState("");
    const handleUpClick= () => {
        // console.log("Uppercase was clicked")
        let newtext=Text.toUpperCase();
        setText(newtext)
        props.showAlert("text has been changed to uppercase",'success')

    }
    const handleDownClick= () => {
        // console.log("Uppercase was clicked")
        let newtext=Text.toLowerCase();
        setText(newtext)
        props.showAlert("text has been changed to lowercase",'success')

    }
    const handleOnChange= (event) => {
        // console.log("Onchange was clicked")
        setText(event.target.value)
    }

    const ClearText= () => {
        // console.log("Uppercase was clicked")
        let newtext=("");
        setText(newtext)
        props.showAlert("text has been cleared",'success')
    }

    const CopyText= () => {
        // console.log("Uppercase was clicked")
        let newtext=document.getElementById("myBox");
        navigator.clipboard.writeText(newtext.value)
        props.showAlert("text has been copied",'success')

    }

    const extraSpaces= () => {
        // console.log("Uppercase was clicked")
        let newtext=Text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("extra spaces removed",'success')

    }
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
            <h1 >{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
            </div>
            <button disabled={Text.length===0}  className="btn btn-primary my-2 mx-2 " onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={Text.length===0}  className="btn btn-primary my-2 mx-2 " onClick={handleDownClick}>Convert to Lowercase</button>
            <button disabled={Text.length===0}  className="btn btn-primary my-2 mx-2 " onClick={ClearText}>ClearText</button>
            <button disabled={Text.length===0}  className="btn btn-primary my-2 mx-2 " onClick={CopyText}>CopyText</button>
            <button disabled={Text.length===0} className="btn btn-primary my-2 mx-2 " onClick={extraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
            <h1>Your text summary</h1>
            <p>{Text.split(/\s+/).filter((Element)=>{return Element.length!== 0}).length} words {Text.length} characters</p>
            <p>{0.008*Text.split(" ").filter((Element)=>{return Element.length!== 0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{Text.length>0?Text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
