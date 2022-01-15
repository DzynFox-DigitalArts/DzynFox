import './style.css'

import Navbar from "../../components/Navbar"
import HeroSection from "../../sections/Home/HeroSection";
import YTVideos from '../../sections/Home/YoutubeVideos';
import OurExpertise from '../../sections/Home/OurExpertise';
import WhyUs from '../../sections/Home/WhyUs';

const Home = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
            <WhyUs />
            <OurExpertise />
        </>
    )
}

export default Home;