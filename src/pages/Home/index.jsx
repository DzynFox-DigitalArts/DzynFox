import './style.css'

import Navbar from "../../components/Navbar"
import HeroSection from "../../sections/Home/HeroSection";
import YTVideos from '../../sections/Home/YoutubeVideos';

const Home = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
            <YTVideos />
        </>
    )
}

export default Home;