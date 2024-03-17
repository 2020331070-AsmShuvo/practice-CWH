import React from "react";
import { useState } from "react";

const About = () => {
    const [myStyle, setMyStyale] = useState({
        color: 'black',
        backgroundColor : 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const ToggleMode = ()=>{
        if(myStyle.color == 'black'){
            setMyStyale({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyale({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable dark Mode");
        }
    }
    

  return (
    <div>
        <div className="container mx-auto text-center w-[500px] space-y-4"  >
        <div style={myStyle} className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
            </div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
        <div style={myStyle} className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
            </div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
        <div style={myStyle} className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
            </div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
    </div>
    <div className="flex items-center justify-center m-4">
        <button style={myStyle} onClick={ToggleMode} className="btn mx-auto bg-white border border-gray-800">{btnText}</button>
    </div>
    </div>
  );
};

export default About;
