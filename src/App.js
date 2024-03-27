
import { Outlet } from 'react-router-dom';
import './App.css';
import CarouselData from './Component/Details/Carousel';
import Details from './Component/Details/Details';
import Home from './Component/Home/Home';
import Men from './Component/Men/Men';
import Navbar from './Component/Navbar/Navbar';

function App() {

  return (
    <div className="App">
     <Navbar />
     <Outlet />
     
     
    </div>
  );
}

export default App;
