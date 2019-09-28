import React from 'react';

import './App.css';
import SplitScreen from './components/SplitScreen';

function App() {
  return (
    <div className="App">

      <SplitScreen sidePane='{[<h1>SidePane</h1>]}'></SplitScreen>
      <!--
      <div className="icon-bar">
        <a className="active" href="#"><i className="fa fa-home"></i></a>
        <a href="#"><i className="fa fa-search"></i></a>
        <a href="#"><i className="fa fa-envelope"></i></a>
        <a href="#"><i className="fa fa-globe"></i></a>
        <a href="#"><i className="fa fa-trash"></i></a>
      </div>
    </div>
  );
}

export default App;
