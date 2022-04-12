import React, { useEffect ,useState} from 'react';
import logo from '../../abstract-logo.png';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Sidebar from './Sidebar/Sidebar';
import Header from '../Header/Header';
import './Description.css';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom"
import moment from 'moment';

const Description=()=>{
  
  let { id } = useParams();
  const [data,setData]= useState([])

  useEffect(()=>{
      
    const getComment= async()=>{
     const response = await fetch
     (`https://620f2f65ec8b2ee2833655ed.mockapi.io/api/v1/jobs?page=${id}&limit=1`)
     
     const result = await response.json();
        setData(result);
        console.log(result)
    };
    getComment();
 },[] );

return(
  <>
     
    <div className='outer_div'>
      <Header/> 
      {
    data.map((desc)=>{
      return (
    <div className='desc_div'>
          <div className="descsidenavigation_div">
            
            <Sidebar email={desc.email} ccemail={desc.ccmail}/>
     </div>
       <div className="summary_section listing_div">
          <div className='dis_flex'>
              <div className="desc_jobtitle"><h2>{desc.position}</h2></div>
            <div className='job_type desc_type'>Full time</div>
          </div>
         <div className='dis_flex'>
           <AccessTimeIcon style={{fontSize: "16px" ,color: "#B9BDCF"}}/>
             <div className='span_col2 span_col'> {moment.utc(desc.createdAt).local().fromNow()}</div>
        </div>
                <div id="container" className="grid_box">
                <div style={{ backgroundImage:`url(${logo})` }} className='company_logo'></div>
                   <div className='company_details'>
                <div id="filters" className='company_name bold_title'>{ desc.company}</div> 
                     <div className='job_section'>
                        <div className='dis_flex mar_top'>
                           <div>
                            <PublicOutlinedIcon style={{fontSize: "16px" ,color: "#B9BDCF"}}/> 
                          </div>
                    <div className='span_col1 span_col'>{ desc.state}</div>
                   </div>
              </div>
          </div>  
        </div>
        <div className="description_sum">
              <p>{desc.desc} </p>
              <p>{desc.desc} </p>

    </div>
  </div> 
 </div>
 )
    })
  }
 </div>
 </>
)}
export default Description;