import React from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./compnents/Nav";
import Filter from "./compnents/Filter";
import Cards from "./compnents/Cards";


const App = () => {
  return (
  <div>
    <Navbar/>

    <Filter
    filterData={filterData}
    />

    <Cards/>
  </div>
  );
};

export default App;
