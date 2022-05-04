import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './components/Singup/index';
import SignIn from './components/Login/index';
import Profile from "./components/user/profile/profile"
import { FooterContainer} from './containers/footer'


function App() {
	

  return (
    <>
    <div>
    <Router>
       <Navbar />
      <Routes>
        <Route path='/'  exact element={<Home/>} />
        <Route path='/about'  element= {<About/>} />
        <Route path='/services' element= {<Services/>} />
        <Route path='/contact-us' element= {<Contact/>} />
       <Route path='/register' element= {<SignUp/>} />
       <Route path='/login' element= {<SignIn/>} />
       <Route path='/login' element= {<SignIn/>} />
       <Route path='/profile' element= {<Profile/>} />
      
      </Routes>
    </Router>
    <div style={{overflowY:"scroll", height:"800px"}}></div> 
    
    </div>
    <FooterContainer />
    </>
  );
}

export default App;
