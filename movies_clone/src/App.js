
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Trendingmovies from './components/Trendingmovies'
import Pagination from './components/Pagination'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Favourites from './components/Favourites';
function App() {
  return (
  <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      
      <Route path="/favourites" element={<Favourites/>}/>
      <Route path="/movies"   element={<><Banner /> <Trendingmovies /> <Pagination /></> }/>
  
    </Routes>
    {/*<Banner></Banner>
    <Trendingmovies></Trendingmovies>
  <Pagination></Pagination>*/}
  </BrowserRouter>
  );
}

export default App;
