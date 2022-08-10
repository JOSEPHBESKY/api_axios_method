import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addtocart} from './slice';
 import axios from 'axios';
function App() {
  const state=useSelector((state)=>(state))
  console.log(state);
  const dispatch=useDispatch();
  const [task,settask]=useState([]);
  console.log(task);
  useEffect(()=>{
    gettask();
  },[]);
  const gettask=async()=>{
    // fetch("https://jsonplaceholder.tyicode.com/todos")
    // .then((res)=> res.json())
    // .then((json)=>settask(json))
    // axios.get().then((res)=>settask(res.data))
    const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(res.data);
    settask(res.data)
  }
  const addcart=()=>{
    dispatch(addtocart([{name:"joseph"}]));
  }
  return (
    <div>
    <button onClick={()=>addcart()}>click</button>
   { task.map((item,index)=><div key={index}><p>{item.tittle}</p></div>)}  </div>
  )
}

export default App;
