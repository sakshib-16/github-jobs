import React from 'react';
import logo from '../../../abstract-logo.png';
import backgroundImg from '../../../assests/images/backgroundImg.png';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import moment from 'moment';

const Listing = ({ item })=>{
const {company}=item
return(

<>
            <div id="containers" className="grid-container" key={item.id}>
           <div style={{ backgroundImage:`url(${logo})` }} className='company_logo'></div>

           <div className='company_details'>
             <div id="filters" className='company_name margin-btm'>{company}</div>
             <div className='job_title margin-btm'>{item.position}</div>
             <div className='job_section'>
              <div className='job_type margin-btm'>Full time</div>
              <div className='job_subsection'>
                <div className='dis_flex'>
                   <div>
                <PublicOutlinedIcon style={{fontSize: "16px" ,color: "#B9BDCF"}}/> 
                </div>
                 <div className='span_col1 span_col'>{item.state}</div>
              </div>
              <div className='dis_flex'>
              <AccessTimeIcon style={{fontSize: "16px" ,color: "#B9BDCF"}}/>
           <div className='span_col2 span_col'>{moment.utc(item.createdAt).local().fromNow()}
 
                 </div>
               </div>
               </div>
            </div>
           </div> 
        </div> 
          
          </>

)

}
export default Listing;











        