import React from 'react'

function NavBar() {
  return (
    <div className="border items-center py-4 pl-12 flex space-x-8">
    <img src="https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png"></img>
    <div className="text-blue-400 text-3xl font-bold">Movies</div>
    <div className="text-blue-400 text-3xl font-bold">Favourites</div>
    </div>
  )
}

export default NavBar;