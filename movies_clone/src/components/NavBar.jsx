import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="border items-center py-4 pl-12 flex space-x-8">
    <img src="https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png"></img>
    <Link to="movies" className="text-blue-400 text-3xl font-bold">Movies</Link>
    <Link to="favourites" className="text-blue-400 text-3xl font-bold">Favourites</Link>
    </div>
  )
}

export default NavBar;