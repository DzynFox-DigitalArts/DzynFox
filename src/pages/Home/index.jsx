import './style.css'

import Navbar from "../../components/Navbar"
import HeroSection from "../../sections/Home/HeroSection";
import OurExpertise from '../../sections/Home/OurExpertise';
import WhyUs from '../../sections/Home/WhyUs';
import StatsSection from '../../sections/Home/StatsSection';
import TestimonialSection from '../../sections/Home/TestimonialSection';
import ContactForm from '../../sections/Home/ContactForm';
import OurClients from '../../sections/Home/OurClients';
import OtherBrands from '../../sections/Home/OtherBrands';
import Footer from '../../components/Footer';

const Home = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
            <WhyUs />
            <OurExpertise />
            <TestimonialSection />
            <StatsSection />
            <OurClients />
            <ContactForm />
            <OtherBrands />
            <Footer />
        </>
    )
}

export default Home;