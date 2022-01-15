import './style.css'

import Navbar from "../../components/Navbar"
import HeroSection from "../../sections/Home/HeroSection";
import YTVideos from '../../sections/Home/YoutubeVideos';
import OurExpertise from '../../sections/Home/OurExpertise';

const Home = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
            <YTVideos />
            <OurExpertise />
        </>
    )
}

export default Home;