import './style.css'

import Navbar from "../../components/Navbar";
import HeroSection from "../../sections/AboutUs/HeroSection";
import Footer from '../../components/Footer';
import OurTeam from '../../sections/AboutUs/OurTeam';

const AboutUs = () => {
    return(
        <>
        <Navbar />
        <HeroSection />
        <OurTeam />
        <Footer />
        </>
    )
}

export default AboutUs;