import './App.css';
import SideBar from './components/SideBar';
import Body from './components/Body';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
    <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <SideBar/>
        <Body/>
      </div>
    </div>
   </>
  );
}

export default App;
