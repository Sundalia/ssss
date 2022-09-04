import React from "react";
import './App.css';
import Lever from './components/Lever';
import H1ItsTime from './components/H1ItsTime';
import H1MoveAll from './components/H1MoveAll';
import Swipe from './components/Swipe';
import Swipe1 from './components/Swipe1';
import Swipe2 from './components/Swipe2';
import Swipe3 from './components/Swipe3';
import Swipe4 from './components/Swipe4';
import Clouds from './components/Clouds'


function App() {
  return (
    <div className="App">
      <H1ItsTime />
      <Lever />
      <H1MoveAll/>
      <Swipe/>
      <Swipe2/>
      <Swipe3/>
      <Swipe4/>
      <Clouds/>
    </div>
  );
}

export default App;
