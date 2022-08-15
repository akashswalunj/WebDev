
import image from './img4.jpg'
import axios from 'axios'
import { Oval } from  'react-loader-spinner'
import React, { useState, useEffect } from 'react';


function Trendingmovies() {

 const[movies,setMovies]= useState([])

 axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=25f8b5ac26233a3b3968dacdc291d49c")
 .then((res)=>console.table(res.data.results))
 return (
   <>
   <div className="mb-8">
    <div className="mt-8 text-bold text-3xl text-center ">Trending Movies</div>
    {
      
      movies.length ==0 ?
      <div className='flex justify-center'>
      <Oval
      heigth="100"
      width="100"
      color="grey"
      secondarColor="grey"
      ariaLabel='loading'
      />
      </div>:
    
     <div className="flex flex-wrap justify-center">
       <div className={`bg-[url(${image})] flex items-end md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl m-4 hover:scale-110 ease-out duration-300`}> 
          <div className="bg-gray-900 w-full text-white py-2 text-center rounded-b-xl ">
           Spider-Man :No Way Home
          </div>
       </div>
       <div className={`bg-[url(${image})] flex items-end md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl m-4 hover:scale-110 ease-out duration-300`}> 
          <div className="bg-gray-900 w-full text-white py-2 text-center rounded-b-xl ">
           Spider-Man :No Way Home
          </div>
       </div>
       <div className={`bg-[url(${image})] flex items-end md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl  m-4 hover:scale-110 ease-out duration-300`}> 
          <div className="bg-gray-900 w-full text-white py-2 text-center rounded-b-xl ">
           Spider-Man :No Way Home
          </div>
       </div>
       <div className={`bg-[url(${image})] flex items-end md:h-[35vh] md:w-[200px] h-[25vh] w-[150px]  bg-center bg-cover rounded-xl m-4 hover:scale-110 ease-out duration-300`}> 
          <div className="bg-gray-900 w-full text-white py-2 text-center rounded-b-xl ">
           Spider-Man :No Way Home
          </div>
       </div>
       <div className={`bg-[url(${image})] flex items-end md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl m-4 hover:scale-110 ease-out duration-300`}> 
          <div className="bg-gray-900 w-full text-white py-2 text-center rounded-b-xl ">
           Spider-Man :No Way Home
          </div>
       </div>
       <div className={`bg-[url(${image})] flex items-end md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl m-4 hover:scale-110 ease-out duration-300`}> 
          <div className="bg-gray-900 w-full text-white py-2 text-center rounded-b-xl ">
           Spider-Man :No Way Home
          </div>
       </div>
       <div className={`bg-[url(${image})] flex items-end md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl m-4 hover:scale-110 ease-out duration-300`}> 
          <div className="bg-gray-900 w-full text-white py-2 text-center rounded-b-xl ">
           Spider-Man :No Way Home
          </div>
          
       </div>
       <div className={`bg-[url(${image})] flex items-end md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl m-4 hover:scale-110 ease-out duration-300`}> 
          <div className="bg-gray-900 w-full text-white py-2 text-center rounded-b-xl ">
           Spider-Man :No Way Home
          </div>
       </div>
       <div className={`bg-[url(${image})] flex items-end md:h-[35vh] md:w-[200px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl m-4 hover:scale-110 ease-out duration-300`}> 
          <div className="bg-gray-900 w-full text-white py-2 text-center rounded-b-xl ">
           Spider-Man :No Way Home
          </div>
       </div>
       </div> 
    }     
   </div>
   </>
 )
}

export default Trendingmovies