import './App.css';
import './responsive.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const AllExpertise = React.lazy(() => import('./pages/AllExpertise'));
const ExpertiseDetailed = React.lazy(() => import('./pages/ExpertiseDetailed'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
const BlogDetailed = React.lazy(() => import('./pages/BlogDetailed'));

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about-us" element={
            <React.Suspense fallback="Loading...">
              <AboutUs />
            </React.Suspense>
          } />
          <Route path="expertise" element={
            <React.Suspense fallback="Loading...">
              <AllExpertise />
            </React.Suspense>
          } />
          <Route path="expertise/:name" element={
            <React.Suspense fallback="Loading...">
              <ExpertiseDetailed />
            </React.Suspense>
          } />
          <Route path="blog" element={
            <React.Suspense fallback="Loading...">
              <Blogs />
            </React.Suspense>
          } />
          <Route path="blog/:slug" element={
            <React.Suspense fallback="Loading...">
              <BlogDetailed />
            </React.Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
