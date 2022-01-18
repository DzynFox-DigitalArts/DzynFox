import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import AllExpertise from './pages/AllExpertise';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about-us" element={<AboutUs />}/>
          <Route path="expertise" element={<AllExpertise />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
