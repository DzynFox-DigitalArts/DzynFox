import './style.css'

import Navbar from "../../components/Navbar";
import HeroSection from "../../sections/AboutUs/HeroSection";
import Footer from '../../components/Footer';
import OurTeam from '../../sections/AboutUs/OurTeam';
import OurPhilosophy from '../../sections/AboutUs/OurPhilosophy';
import QuickResponseForm from '../../components/QuickResponseForm.jsx';

import {useEffect} from 'react';

import {analytics} from '../../firebase/firebase'
import {logEvent} from 'firebase/analytics'

const AboutUs = () => {

    useEffect(() => {
        logEvent(analytics, 'about_us_page_visit')
    }, [])
    
    return(
        <>
        <Navbar />
        <HeroSection />
        <OurPhilosophy />
        <OurTeam />
        <QuickResponseForm />
        <Footer />
        </>
    )
}

export default AboutUs;