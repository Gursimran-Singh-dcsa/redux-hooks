import React, { useState } from 'react';
import './App.css';
// import { store } from './store.js';
import { useDispatch, useStore, useSelector } from 'react-redux';
import {List} from './List';


const App = () =>{
  const store=useStore();
    const [name, setName]= useState("");
    const dispatch= useDispatch();
    const handleName = (e) =>
    {
      setName(e.target.value);
    }
    const handleBtnClick = (e) =>
    {
      dispatch({type: "ADD", value:name});
      setName("");
      console.log(store.getState())
    }

    return (
      <div id="root1">
      <input type="text" value={name} onChange={handleName} placeholder="Enter a name" />
      <button onClick={handleBtnClick}>ok</button>
      <ul className="list">
      <List/> 
      </ul>
      </div>
    )
}



export default App;

