import React , {useState} from 'react';
import backgroundImg from '../../assests/images/backgroundImg.png';
import './JobSearch.css'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import JobList from '../JobList/JobList';
import SideNavigation from '../SideNavigation/SideNavigation';

const JobSearch=(props)=>{

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sideFiltered, setSideFiltered] = useState([]);
    

  const searchItems = (searchValue) => {
    if (searchValue !== '') {
        const filteredData = props.text.filter((item) => {
             const search = (item.company).toLowerCase().includes(searchValue.toLowerCase())
                        ||(item.position).toLowerCase().includes(searchValue.toLowerCase())
           return(search)
        // Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
          })
      setFilteredResults(filteredData)  
      console.log("fltr",filteredData)
    }
    else{
        setFilteredResults([])
    }
} 
    return(
      <>
      <div style={{ backgroundImage:`url(${backgroundImg})` }} className="searchBoxbg">
        <div className="custom-search">
        <WorkOutlineIcon style={{fontSize: "16px" ,color: "#B9BDCF" ,margin:"auto",marginLeft:"10px"}}/>
            <input type="text"
              className="custom-search-input"
              placeholder="Title,companies,expertise or benefits"
               //onChange={(e) => searchItems(e.target.value)}
               onChange={(e) => setSearchInput(e.target.value)}
          />  
            <button type="submit" className='btn searchbtn custom-search-botton'
              onClick={()=>searchItems(searchInput)}>Search</button>
      </div>        
      </div>
      
        <div className='second_div'>
          <div className='sidenavigation_div'>
            <SideNavigation text={props.text} filtered={i => setSideFiltered(i)}/>
          </div>
          <div className='listing_div'>

            {filteredResults.length ?
                 (sideFiltered.length ? <JobList data={sideFiltered}/>
                    : <JobList data={filteredResults}/> )
              : 
              (sideFiltered.length ? <JobList data={sideFiltered}/>
                : 
             <JobList data={props.text}/>)
            }
            </div>
          </div>
   </> 
)}
export default JobSearch;