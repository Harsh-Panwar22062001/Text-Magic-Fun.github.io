import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);              

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      
      
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      
    }
  }
  return (
    
    <>
    <footer/>
    <Router>
    <Navbar title="Text Magic Fun" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    
          <Route exact path="/about" key="about">
            <About mode={mode} />
          </Route>
          <Route exact path="/" >
            <TextForm showAlert={showAlert} heading="Try Text Magic Fun - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    
    </> 
  );
}

export default App;