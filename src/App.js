import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
   <div> 
    <NavBar/>
     <Home/>
     < About/>
     < Portfolio/>
     < Experience/>
     < Contact/>

     <SocialLinks />
     <ToastContainer />
   </div>
  );
}

export default App;

