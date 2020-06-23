import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaiTapDanLayout from './components/BaiTapDanLayout/BaiTapDanLayout';
import DataBinding from './components/DataBinding/DataBinding';
import EventBinding from './components/DataBinding/EventBinding';
import State from './components/State/State';
import ExState1 from './components/State/ExState1';
import ExState2 from './components/State/ExState2';
import RenderWithMap from './components/RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
      {/* <BaiTapDanLayout/> */}
      {/* <DataBinding/> */}
      {/* <EventBinding/> */}
      {/* <State/> */}
      {/* <ExState1/> */}
      {/* <ExState2/> */}
      <RenderWithMap/>
    </div>
  );
}

export default App;
