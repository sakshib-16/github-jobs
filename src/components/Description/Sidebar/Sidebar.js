import React from 'react';
import './Sidebar.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Link,Route } from "react-router-dom";


const Sidebar=(props)=>{
  const navigate = useNavigate();
  const {email,ccemail}=props

    return(
        <div className='sidebar_div'>
            <div className='dis_flex mar_left'>
            <KeyboardBackspaceIcon style={{color:"#1e86ff"}}/>
          <Link to={{
                 pathname: `/`
               }}>Back to Search</Link>
          </div>
          <div className='apply_title'>
          <h1>HOW TO APPLY</h1>
          </div>
          <div className=""> 
          <p>Please email a copy of your resume<br/>
            and online portfolio to
            <a href={`mailto:${email}`}>{email}</a>  & CC <a href={ccemail}>{ccemail}</a></p>
          </div>
        </div>

    )
}
export default Sidebar;