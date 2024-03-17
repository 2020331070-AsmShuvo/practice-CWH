import React, { useState } from "react";

const TextForm = (props) => {
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClearText = () => {
    let newtext = "";
    setText(newtext);
  };
  const handleInvert = () => {
    let newtext = "";
    for(let i=0; i<text.length; i++){
        if(text[i].toUpperCase() === text[i]){
            console.log("called")
            newtext+=text[i].toLowerCase();
        }
        else{
            newtext+=text[i].toUpperCase();
        }
    }
    setText(newtext);
  };
  const cnt_Text = (str) => {
    if (!str.length) return 0;
    return str.trim().split(/\s+/).length;
  };

  const [text, setText] = useState("");



  return (
    <div className="text-center space-y-2">
      <h1>{props.heading}</h1>
      <div>
        <textarea
          className={`textarea textarea-primary w-[800px] h-56 ${props.mode == 'white'?'text-black':'text-white'} ${props.mode=='white'?"bg-white":"bg-blue-700"}`}
          placeholder="Text here"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="flex flex-col gap-1">
        <button
          onClick={handleUpClick}
          className="btn w-40 mx-auto btn-primary"
        >
          Convert to Uppercase
        </button>
        <button
          onClick={handleLowClick}
          className="btn w-40 mx-auto btn-primary"
        >
          Convert to Lowercase
        </button>
        <button
          onClick={handleClearText}
          className="btn w-40 mx-auto btn-primary"
        >
          Clear
        </button>
        <button
          onClick={handleInvert}
          className="btn w-40 mx-auto btn-primary"
        >
          Invert
        </button>
      </div>

      <h3 className="text-gray-500">
        {cnt_Text(text)} words {text.length} charancters
      </h3>
    </div>
  );
};

export default TextForm;
