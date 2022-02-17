import './style.css'

import HeroSection from "../../sections/AboutUs/HeroSection";
import OurTeam from '../../sections/AboutUs/OurTeam';
import OurPhilosophy from '../../sections/AboutUs/OurPhilosophy';
import QuickResponseForm from '../../components/QuickResponseForm.jsx';

import {useEffect} from 'react';
import { Helmet } from 'react-helmet';

import {analytics} from '../../firebase/firebase'
import {logEvent} from 'firebase/analytics'

const AboutUs = () => {

    useEffect(() => {
        logEvent(analytics, 'about_us_page_visit')
    }, [])
    
    return(
        <>
        <Helmet>
            <title>About Us - DzynFox</title>
        </Helmet>
        <HeroSection />
        <OurPhilosophy />
        <OurTeam />
        <QuickResponseForm />
        </>
    )
}

export default AboutUs;