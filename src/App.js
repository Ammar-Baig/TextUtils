// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import About from './components/About';
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const removeClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-primary')
  }
  const toggleMode = (cls) => {
    // console.log(cls)
    removeClasses()
    document.body.classList.add('bg-'+cls)

    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enable', 'success')
      document.title = "Textutils-light"
      // setInterval(() => {
      //   document.title="Intall text utils now"
      // }, 2000);
      // setInterval(() => {
      //   document.title="delete it"
      // }, 1500);
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert('dark mode has been enable', 'success')
      document.title = "Textutils-dark"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About me" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
        
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
