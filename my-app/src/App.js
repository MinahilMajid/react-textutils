import './App.css';
import React, { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App(){
const [mode,setmode]=useState('light');
const [alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500);

}
const togglemode=()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
}
}

  return(
    <>
<Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container my-3">

<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> 

{/* <About/> */}
</div>
</>


  );
}
export default App;