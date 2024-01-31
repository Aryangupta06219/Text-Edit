
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, {useState} from 'react'

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlt=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleSty=(cls)=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlt("Dark mode on", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlt("Light mode on", "success");
    }
  }

  return (
    <>
        <Navbar title="TextEdit" about="About us" mode={mode} toggleSty={toggleSty}/>
        <Alerts alert={alert}/>
        <div className="container">
          <TextForm showAlt={showAlt} heading="Write your text..." mode={mode}/>
        </div>
    </>
  );
}

export default App;