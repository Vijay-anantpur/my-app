//import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  // this returns only 1 tag that is <div> if u need more tafs use fragment that is <> </>
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      message :message,
    type : type

  })
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About Text Utils" />
      <Alert alert={alert}/>
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/"> 
        <TextForm showAlert={showAlert} heading="Enter the text to analyze"/>
          </Route>
        </Switch>
      </div>
      </Router> 
    </>
  );
}

export default App;
