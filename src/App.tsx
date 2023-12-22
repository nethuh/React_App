import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./view/NavBar/NavBar";
import {MainContent} from "./view/mainContent/MainContent";
import {Footer} from "./view/footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        {/*    <div style={{backgroundColor: "red" , padding: 10, textAlign: "center"}}> Inline css Box</div>*/}
        {/*<div className= "box">External Css Box </div>*/}
        {/*    <div className="bg-red">Inline Tailwind</div>*/}
        {/*<h1 className="text-center text-black">*/}
        {/*    Hello world!*/}
        {/*</h1>*/}
        <NavBar/>
        <MainContent/>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
