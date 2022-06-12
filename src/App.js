import './App.css';
import './pages/Home/style.css'
import './responsive.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {lazy, Suspense} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import HBD from './pages/HBD'
import Loading from './components/Loading';

const AboutUs = lazy(() => import('./pages/AboutUs'))
const ExpertiseDetailed = lazy(() => import('./pages/ExpertiseDetailed'))
const AlliedServices = lazy(() => import('./pages/AlliedServices'))
const Blogs = lazy(() => import('./pages/Blogs'))
const BlogDetailed = lazy(() => import('./pages/BlogDetailed'))
const Partners = lazy(() => import('./pages/Partners'))

const SocialMedia = lazy(() => import('./pages/ExpertiseLanding/SocialMedia'))

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about-us" element={<AboutUs />}/>
          <Route path="allied-services" element={<AlliedServices />}/>
          <Route path="expertise/:slug" element={<ExpertiseDetailed />}/>
          <Route path="social-media-designs" element={<SocialMedia />}/>
          <Route path="blog" element={<Blogs />}/>
          <Route path="blog/:slug" element={<BlogDetailed />}/>
          <Route path="partners" element={<Partners />}/>
          <Route path="hbd" element={<HBD />}/>
          <Route path='*' element={<h1>Page Not Found</h1>} exact={true}/>
        </Routes>
        </Suspense>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
