import { createStore } from 'redux';
const initialStore = ["name1","name2"];
const reducer = (state = initialStore, action) => {
  if(action.type === "ADD")
  {
    console.log("add called");
    console.log("State is",state);
    console.log("Action value is",action.value);
    return [...state, action.value];
  }
  return state;
}
export const store = createStore(reducer);