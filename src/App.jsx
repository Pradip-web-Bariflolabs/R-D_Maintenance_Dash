import './App.css';
import SideBar from './components/SideBar';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <SideBar/>
        <Router> 
          <LandingPage />
        </Router>
      </div>
      
    </div>
  );
}

export default App;
