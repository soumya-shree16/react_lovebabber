import  { useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./compnents/Navbar";
import Filter from "./compnents/Filter";
import Cards from "./compnents/Cards";
import {toast} from "react-toastify";
import { useEffect } from 'react';
import Card from "./compnents/Card";

const App = () => {

  const[courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
 
    async function fetchData() {
      setLoading(true);
      try{
        let res=await fetch (apiUrl);
        let output=await res.json();
        setCourses(output.data);
      }
      catch (error){
           toast.error("something went wrong");
      }
      setLoading(false);
    }
    useEffect(()=>{
      fetchData();
    },[])
  
  

  return (
    <div>
  <div>
    <Navbar/>
</div>
<div>
    <Filter
    filterData={filterData}
    />
</div>
   <div>
    <Cards courses={courses}/>
  </div>
<div>
  <Card/>
  </div>
  </div>
  );
};

export default App;
