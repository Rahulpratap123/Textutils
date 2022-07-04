
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode =()=>
  {
    if(mode ==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
     }
  else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
    }
  } 


  return (
    <>
        {/*<Navbar title="Texttutil" about="About" mode={mode} toggleMode={toggleMode} />*/}
         <Navbar title="Texttutil" mode={mode} toggleMode={toggleMode} />
         <div className="container my -3">
          <TextForm heading="enter text to analyze below " mode={mode}/>
          {/*<About/>*/}
        </div>
    </>
    
  );
}

export default App;
