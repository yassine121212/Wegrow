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
import Feedback from "./components/Home/feedback/feedback";



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
       <Route path='/Menage' element= {<Menage/>} />
         <Route path='/Peinture' element= {<Peinture/>} />
           <Route path='/Informatique' element= {<Informatique/>} />
             <Route path='/Demenagement' element= {<Demenagement/>} />
               <Route path='/Bricolage' element= {<Bricolage/>} />
                 <Route path='/Jardinage' element= {<Jardinage/>} />
                   <Route path='/Animaux' element= {<Animaux/>} />
       <Route path='/feedback' element= {<Feedback/>} />
       <Route path='/messenger' element= {<Messenger/>} />
 

      
      </Routes>
    </Router>
    
    </div>
     </>
  );
}

export default App;
