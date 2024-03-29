import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import About from './Views/About';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<About />} />


            {/* <Route path="blogs" element={<Blogs />} />
            <Route path="*" element={<NoPage />} /> */}
    
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




