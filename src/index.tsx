import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

interface initialState{
  name:string,
  age:number,
}
interface typeAction{
  type:string
}

let state:initialState={
  name:"reza",
  age:21
};
console.log(state);
let store=createStore((s:initialState=state,action:typeAction)=>{
  switch (action.type) {
    case "INCREMENT":
      return {...s,age:s.age+1}
      case "DECREMENT":
        return {...s,age:s.age-1}
    default: 
    return s
      
  }
 
})
console.log('get redux',store.getState())
store.subscribe(()=>{
  console.log("subscript",store.getState())
})
let incrementAction:typeAction={
  type:"INCREMENT"
}
let decrementAction:typeAction={
  type:"DECREMENT"
}
store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch(decrementAction)
store.dispatch(incrementAction)
store.dispatch(decrementAction)
store.dispatch(decrementAction)
store.dispatch(decrementAction)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
