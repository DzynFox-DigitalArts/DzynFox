import './App.css';
import './pages/Home/style.css'
import './responsive.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {lazy, Suspense} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'

import Loading from './components/Loading';

// const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'))
const AllExpertise = lazy(() => import('./pages/AllExpertise'))
const ExpertiseDetailed = lazy(() => import('./pages/ExpertiseDetailed'))
const Blogs = lazy(() => import('./pages/Blogs'))
const BlogDetailed = lazy(() => import('./pages/BlogDetailed'))
const HBD = lazy(() => import('./pages/HBD'))

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Suspense fallback={<Loading isFullScreen={true} />}>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </Suspense>
        <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="about-us" element={<AboutUs />}/>
          <Route path="expertise" element={<AllExpertise />}/>
          <Route path="expertise/:name" element={<ExpertiseDetailed />}/>
          <Route path="blog" element={<Blogs />}/>
          <Route path="blog/:slug" element={<BlogDetailed />}/>
          <Route path="hbd" element={<HBD />}/>
        </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
