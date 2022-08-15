
import React, { useState } from 'react';

function Pagination() {
  let [pageNumber, setPage]= useState(1);
  function goAhead(){
    setPage(pageNumber+1);
  }
  function goBack(){
    if(pageNumber>1)
    setPage(pageNumber-1);
  }
  
  return (
    <>
      <div className="w-full flex justify-center text-xl mb-6 ">
        <button className="p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl " onClick={goBack}>Previous</button>
        <button className="p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-300">{pageNumber}</button>
        <button className="p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl" onClick={goAhead}>Next</button>
      </div>
    </>
  )
}

export default Pagination