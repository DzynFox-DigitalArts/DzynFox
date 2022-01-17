import './style.css'

import Navbar from "../../components/Navbar";
import HeroSection from "../../sections/AboutUs/HeroSection";
import Footer from '../../components/Footer';
import OurTeam from '../../sections/AboutUs/OurTeam';
import OurPhilosophy from '../../sections/AboutUs/OurPhilosophy';

const AboutUs = () => {
    return(
        <>
        <Navbar />
        <HeroSection />
        <OurPhilosophy />
        <OurTeam />
        <Footer />
        </>
    )
}

export default AboutUs;