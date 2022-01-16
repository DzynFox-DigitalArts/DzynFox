import './style.css'

import Navbar from "../../components/Navbar"
import HeroSection from "../../sections/Home/HeroSection";
import YTVideos from '../../sections/Home/YoutubeVideos';
import OurExpertise from '../../sections/Home/OurExpertise';
import WhyUs from '../../sections/Home/WhyUs';
import StatsSection from '../../sections/Home/StatsSection';
import TestimonialSection from '../../sections/Home/TestimonialSection';
import ContactForm from '../../sections/Home/ContactForm';

const Home = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
            <WhyUs />
            <OurExpertise />
            <TestimonialSection />
            <StatsSection />
            <ContactForm />
        </>
    )
}

export default Home;