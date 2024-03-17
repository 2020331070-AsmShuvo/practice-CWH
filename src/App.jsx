import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";

function App() {
    const [mode, setMode] = useState('white');
    const [modeText, setModeText] = useState('Dark-Mode');

    const toggleMode = ()=>{
        if(mode==='black'){
            setMode('white');
            setModeText('Dark-Mode');
            document.body.style.backgroundColor = '#FFF'
        }
        else{
            setMode('black');
            setModeText('Light-Mode');
            
            document.body.style.backgroundColor = '#09091D'
        }
    }
    return (
        <>
            <Navbar modeText={modeText} mode={mode} toggleMode={toggleMode} title="Nevubar" ></Navbar>
            <TextForm heading="Enter the text to analyze"></TextForm>
            <About></About>
        </>
  );
}

export default App;
