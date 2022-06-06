import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
 import Services from './pages/services';
import SignUp from './components/Singup/index';
import SignIn from './components/Login/index';
import Profile from "./components/user/profile/profile"
import Help from "./components/user/help/help"
import Menage from "./pages/servicespages/menage"
import Peinture from "./pages/servicespages/peinture"
import Informatique from "./pages/servicespages/informatque"
import Demenagement from "./pages/servicespages/demenagement"
import Bricolage from "./pages/servicespages/bricolage"
import Jardinage from "./pages/servicespages/jardinage"
import Animaux from "./pages/servicespages/animaux"
import Messenger from "./pages/messenger/Messenger";



function App() {
	

  return (
    <>
    <div>
    <Router>
       <Navbar className="popppo" />
      <Routes>
        <Route path='/'  exact element={<Home/>} />
        <Route path='/services' element= {<Services/>} />
        <Route path='/register' element= {<SignUp/>} />
       <Route path='/login' element= {<SignIn/>} />
       <Route path='/profile' element= {<Profile/>} />
       <Route path='/help' element= {<Help/>} />
       <Route path='/jardinage' element= {<Jardinage/>} />
       <Route path='/messenger' element= {<Messenger/>} />
 

      
      </Routes>
    </Router>
    
    </div>
     </>
  );
}

export default App;
