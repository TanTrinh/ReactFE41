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
import DemoProps from './components/Props/DemoProps';
import Data from '../src/models/data'
import BT2ProductList from './components/BT2ProductList/BT2ProductList';
import BT3PhoneList from './components/BT3PhoneList/BT3PhoneList';
import BTCarts from './components/Props/BTCarts/BTCarts';
import TodoApp from './TodoApp/TodoApp';
import CartsRedux from './GioHangRedux/CartsRedux';
import BaiTapForm from './QuanLySinhVien/BaiTapForm';
import LifeCycle from './lifecycle';

function App() {
  let productList2 = Data;

  return (
    <div className="App">
      {/* <BT3PhoneList/> */}
      {/* <BT2ProductList arrProduct={productList2}/> */}
      {/* <BaiTapDanLayout/> */}
      {/* <DataBinding/> */}
      {/* <EventBinding/> */}
      {/* <State/> */}
      {/* <ExState1/> */}
      {/* <ExState2/> */}
      {/* <RenderWithMap/> */}
      {/* <DemoProps/> */}
      {/* <BTCarts/> */}
      {/* <TodoApp/> */}
      {/* <CartsRedux/> */}
      <BaiTapForm/>
      {/* <LifeCycle/> */}
    </div>
  );
}

export default App;
