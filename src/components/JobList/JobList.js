import React, { useEffect ,useState} from 'react';
import './JobList.css';
import logo from '../../abstract-logo.png';
 import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link,Route } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import Listing from './Listing/Listing';
import moment from 'moment';


const JobList=(props)=>{

  
  const [data, setData] = useState([])
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0)


  const datas = props.data

  const getData = async() => {
    const datas= props.data  
    const slice = datas.slice(offset, offset + perPage)
     
    const postData = slice.map(item =>
                   <Link to={{ pathname: `/about/${item.id}` }}>
                     <Listing item={item}/>
                    </Link>
                 )
                 setData(postData)
                 setPageCount(Math.ceil(datas.length / perPage))
  }
  const handlePageClick = (e) => {
   const selectedPage = e.selected;
    setOffset(selectedPage + 1)
};

  useEffect(() => {
   getData()
  }, [datas, offset])
  

    return(
      <>
        {data}
  
      <div className='pagination'>

      <ReactPaginate
       previousLabel={"<"}
       nextLabel={">"}
       breakLabel={"..."}
       breakClassName={"break-me"}
       pageCount={pageCount}
       onPageChange={handlePageClick}
       containerClassName={"pagination"}
       subContainerClassName={"pages pagination"}
        activeClassName={"active"} 
        nextClassName	={"nextactive"}/>
          
</div>
            </> 
          )} 
    
export default JobList;