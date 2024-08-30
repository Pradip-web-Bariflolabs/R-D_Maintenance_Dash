import './App.css';
import SideBar from './components/SideBar';
import Body from './components/Body';
import Navbar from './components/Navbar';
import LoraTesting from './components/Lora/LoraTesting';
import LoginPage from './components/Login/LoginPage';

function App() {
  return (
   <>
    {/* <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <SideBar/>
        <Body/>
      </div>
    </div>
    <LoraTesting/> */}
    <LoginPage/>
   </>
  );
}

export default App;
