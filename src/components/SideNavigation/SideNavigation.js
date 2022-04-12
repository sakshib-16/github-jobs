import React,{useState} from 'react';
import './SideNavigation.css'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const SideNavigation =(props) => {
  
  const [locFilter,setLocFilter] = useState();

  const locationFilter = locFilter ? props.text.filter(i =>
                        i.city.includes(locFilter)
                     || i.state.includes(locFilter)
                     || i.zipcode.includes(locFilter)
                     || i.country.includes(locFilter)) : '';

    return(
    <div>
       <div className='sideNav_checkbox'> 
         <input type="checkbox" />
         <label>Full Time </label>
        </div>
        
        <div className='sideNav_search'>
           <PublicOutlinedIcon style={{ fontSize: "16px", color: "#B9BDCF" }} /> 
          
          <input type="text"
            className='sideNav_input'
            placeholder="City,state,zip code,country"
            onChange={(e) => {
              setLocFilter(e.target.value)
              props.filtered(locationFilter)
            }}
          />
  </div>
  <div className='vertical_show '>
        <input type="radio" value="London" name="gender" /> <label>London</label><br/>
        <input type="radio" value="Amsterdam" name="gender" /> <label>Amsterdam</label><br/>
        <input type="radio" value="New York" name="gender" /> <label>NewYork</label><br/>
        <input type="radio" value="Berlin" name="gender" /> <label>Berlin</label><br/>

      </div>
  </div>
    )
}
export default SideNavigation;