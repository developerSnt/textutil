import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';


import {
  BrowserRouter ,
  Routes,
  Route,   
 Link
} from "react-router-dom";
function App() {

  const [modes, setmode] = useState('light');
  const [alert,setalert] = useState(null);
  const showalert = (message, type)=>{
     setalert({
      mes : message,
      type : type
      
     })
     setTimeout(()=>{ 
      setalert(null);
     },2000);

  }
  const removebodyClass = ()=>{
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
  }
  const tarrigarMode= (cls)=>{
    removebodyClass();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
 if(modes === 'dark'){
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showalert("light mode has been enable","success");
    document.title = 'Textutils Light-Mode';

 }
else{
  setmode('dark');
  document.body.style.backgroundColor = '#042743';
  showalert("Dark mode has been enable","success");
  document.title = 'Textutils dark-Mode';
  setInterval(() => {
    document.title = 'Textutils is Amazing  ';
  },2000);
  setInterval(() => {
    document.title = 'Install TextUtils Now';
  },1500);
  

 }
}

  return (
    <>



<BrowserRouter>
        <Navbar
          title="TextUtils2"
          about="About As"
          modes={modes}
          tarrigarMode={tarrigarMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={modes}>
          <Routes>
            <Route exact path="/about" element={<About  modes={modes} />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                showalert={showalert}
                  heading="TextUtils - word Counter, Character Counter,Remove Extaram Space "
                  modes={modes}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>


     
    </>
  );
}

export default App;
