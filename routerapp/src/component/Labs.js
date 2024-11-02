import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => { 
  const navigate=useNavigate();

  function clickHandler(){
   navigate("/about");
  }
  return (
    <div>
    <div>this is lab page</div>
    <button onClick={clickHandler}>Move yo About Page</button>
    </div>
  )
}

export default Labs
