import './style.css'

import Navbar from "../../components/Navbar";
import HeroSection from "../../sections/AboutUs/HeroSection";
import Footer from '../../components/Footer';
import OurTeam from '../../sections/AboutUs/OurTeam';
import OurPhilosophy from '../../sections/AboutUs/OurPhilosophy';
import QuickResponseForm from '../../components/QuickResponseForm.jsx';

const AboutUs = () => {
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