import React, { useState, useEffect } from "react";

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import JobSearch from './components/JobSearch/JobSearch';
import JobList from './components/JobList/JobList';
import SideNavigation from './components/SideNavigation/SideNavigation';
//import Pagination from './components/Pagination/Pagination';


function App() {

  const [data,setData]= useState([])

   useEffect(()=>{
      
        const getComment= async()=>{
         const response = await fetch
         (`https://620f2f65ec8b2ee2833655ed.mockapi.io/api/v1/jobs?&limit=3`)
          const result = await response.json();
            setData(result);
        }; getComment();  
     },[] );
         
  return ( 
    <div className='outer_div'>
      <div className="App">
        <header className="">
           <Header/>    
       </header>
       <JobSearch text={data} />
       </div>
 </div>
  );
}

export default App;
