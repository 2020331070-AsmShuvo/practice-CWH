import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
    const [mode, setMode] = useState('white');
    const [modeText, setModeText] = useState('Dark-Mode');

    const toggleMode = ()=>{
        if(mode==='black'){
            setMode('white');
            setModeText('Dark-Mode');
            document.body.style.backgroundColor = '#FFF';
            document.title = 'Light Mode Enabled';

            setInterval(() => {
                document.title = 'Download React'
            }, 2000);
            setInterval(() => {
                document.title = 'Work smart'
            }, 1500);
        }
        else{
            setMode('black');
            setModeText('Light-Mode');
            document.title = 'Dark Mode Enabled';
            document.body.style.backgroundColor = '#09091D'

            
            setInterval(() => {
                document.title = 'Download React'
            }, 2000);
            setInterval(() => {
                document.title = 'Work smart'
            }, 1500);
        }
    }
    return (
        <div className="container mx-auto">
            <Navbar modeText={modeText} mode={mode} toggleMode={toggleMode} title="Nevubar" ></Navbar>
            <TextForm heading="Enter the text to analyze" mode={mode}></TextForm>
            <About></About>
        </div>
  );
}

export default App;
