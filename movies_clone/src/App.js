
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Trendingmovies from './components/Trendingmovies'
import Pagination from './components/Pagination'
function App() {
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Trendingmovies></Trendingmovies>
    <Pagination></Pagination>
    </>
  );
}

export default App;
