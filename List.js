import {useStore} from 'react-redux';
import React from 'react';

export const List = () => {
  const store = useStore();
  console.log(store.getState());
    const el = store.getState().map(function(value, index){
      return (<li><span key={index}>{value}</span></li>);
    })
    return el;
}