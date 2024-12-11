import React, { useEffect, useState } from 'react'
import axios from 'react'


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Random = ()  => {

  const[gif,setGif]=useState('');

  async function fetchData(){
   const url=`https://api.giphy.com/v1/gifs/random?api_key=MKo4Wa6DRCZdweNYlltRLRbZ1WhrEvJ6&tag=&rating=g${API_KEY}`;
   const output= await axios.get(url);
   console.log(output);
  
  }

  useEffect(()=>{
    fetchData();
  },[] )

  function clickHandler(){

  }
  return (
    <div className='w-1/2 h-[450px] bg-green-500 rounded-lg border
         border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-3xl underline uppercase font-semibold'>
        Random GIF</h1>
        <img src={gif} width="450"/>
        <button onClick={clickHandler}
        className='w-8/12 bg-slate-50 text-lg py-2 rounded-lg'>
          Generate GIF
        </button>
    </div>
  )
}

export default Random