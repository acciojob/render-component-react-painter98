import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  let [component,usecomponent]=useState('');
  usecomponent = 'I am learning React. My life is getting better.';
  
  return (
    <p>{component}</p>
  )
}


export default App;
