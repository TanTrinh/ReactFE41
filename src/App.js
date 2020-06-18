import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaiTapDanLayout from './components/BaiTapDanLayout/BaiTapDanLayout';
import DataBinding from './components/DataBinding/DataBinding';

function App() {
  return (
    <div className="App">
      {/* <BaiTapDanLayout/> */}
      <DataBinding/>
    </div>
  );
}

export default App;
