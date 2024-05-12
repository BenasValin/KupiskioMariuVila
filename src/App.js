import Home from './Home/Home';
import Kontaktai from './Kontaktai/Kontaktai';
import Reservation from './Reservation/Reservation';
import Galerija from './Galerija/Galerija'
import Namai from './Namai/Namai'
import Location from './Location/Location'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import colors from './colors'

function App() {
  

  function componentDidMount() {
    document.documentElement.style.setProperty('--lightBlue', colors.lightBlue);
    document.documentElement.style.setProperty('--orange', colors.orange);
    document.documentElement.style.setProperty('--brown', colors.brown);
    document.documentElement.style.setProperty('--green', colors.green);
    document.documentElement.style.setProperty('--darkGreen', colors.darkGreen);
    document.documentElement.style.setProperty('--darkBlue', colors.darkBlue);
    document.documentElement.style.setProperty('--sand', colors.sand);
    document.documentElement.style.setProperty('--darkSand', colors.darkSand);
    document.documentElement.style.setProperty('--sky', colors.sky);
    document.documentElement.style.setProperty('--grey', colors.grey);
  }

  componentDidMount()
  return (
    <>
    
    <Router>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/kontaktai" element={<Kontaktai />}/>
         <Route path="/rezervacija" element={<Reservation />}/>
         <Route path="/galerija" element={<Galerija/>}/>
         <Route path="/namai" element={<Namai/>}/>
         <Route path="/kaip-mus-rasti" element={<Location/>}/>
      </Routes>
    </Router>
    </>

)
}

export default App;
