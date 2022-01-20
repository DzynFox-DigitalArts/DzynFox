import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import AllExpertise from './pages/AllExpertise';
import ExpertiseDetailed from './pages/ExpertiseDetailed';
import Blogs from './pages/Blogs';
import BlogDetailed from './pages/BlogDetailed';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about-us" element={<AboutUs />}/>
          <Route path="expertise" element={<AllExpertise />}/>
          <Route path="expertise/:name" element={<ExpertiseDetailed />}/>
          <Route path="blog" element={<Blogs />}/>
          <Route path="blog/:slug" element={<BlogDetailed />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
