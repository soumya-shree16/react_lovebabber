
import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const[text,setText]=useState('');
  const[name,setName]=useState("love");

 //type-1 every render
  // useEffect( ()=>{
  //         console.log("ui rendering done");
          
 // });
  //type-2 first render
  // useEffect(()=>{
  //   console.log("ui rendering done");
  // },[]);

  //type-3 first render+whwnwver dependency changes
  useEffect(()=>{
    console.log("change observed");
    
  },[name]);

  //type-4 to handle unmounting of a component
  useEffect(()=>{
    //add event listener
    console.log("listener added");

    return ()=>{
      console.log("listener removed");
      
    }
    
  },[text]);


  function clickHandler(event){
    setText(event.target.value);
        console.log(text);
        
        
  }

  return (
 <div className='app'>
 <input type='text' onChange={clickHandler}></input>
 </div>
  );
}

export default App;
