import React from 'react';
import './Pagination.css'
import ReactPaginate from 'react-paginate';


const Pagination=()=>{

  
    return( 
     
      <>
        

 <ReactPaginate
       previousLabel={"previous"}
       nextLabel={"next"}
       breakLabel={"..."}
       breakClassName={"break-me"}
       pageCount={pageCount}
       onPageChange={handlePageClick}
       containerClassName={"pagination"}
       subContainerClassName={"pages pagination"}
       activeClassName={"active"} />
      
  </>
         )
}
export default Pagination;