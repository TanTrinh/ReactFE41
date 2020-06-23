import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaiTapDanLayout from './components/BaiTapDanLayout/BaiTapDanLayout';
import DataBinding from './components/DataBinding/DataBinding';
import EventBinding from './components/DataBinding/EventBinding';
import State from './components/State/State';

function App() {
  return (
    <div className="App">
      {/* <BaiTapDanLayout/> */}
      {/* <DataBinding/> */}
      {/* <EventBinding/> */}
      <State/>
    </div>
  );
}

export default App;
