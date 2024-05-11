import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import About from './Views/About';
import IndexNavbar from './Components/IndexNavbar';
import Contactus from './Components/Contactus'
import Footer from './Components/Footer';
import Hwd from './Components/Hwd';
import OurServices from './Views/OurServices'
import Impact from './Views/Impact';
import Career from './Views/Career';

function App() {
  return (
    <>
      <BrowserRouter>
        <IndexNavbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path='/how-we-do' element = {<Hwd/>}/>
          <Route path='/ourservices' element = {<OurServices/>}/>
          <Route path='/impact' element = {<Impact/>}/>
          <Route path='/career' element = {<Career/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;




