import './style.css'

import Navbar from '../../components/Navbar'
import {useParams} from 'react-router-dom'
import HeroSection from '../../sections/ExpertiseDetailed/HeroSection'
import Footer from '../../components/Footer'
import Portfolio from '../../sections/ExpertiseDetailed/Portfolio'
import QuickResponseForm from '../../components/QuickResponseForm.jsx'

import {useEffect} from 'react';

import {analytics} from '../../firebase/firebase'
import {logEvent} from 'firebase/analytics'
import JumpToExpertise from '../../sections/ExpertiseDetailed/JumpToExpertise'

const ExpertiseDetailed = () => {

    const {name} = useParams();

    useEffect(() => {
        logEvent(analytics, 'expertise_details_page_visit')
    }, [])

    return(
        <>
        <Navbar />
        <HeroSection name={name} />
        <Portfolio name={name} />
        <JumpToExpertise name={name}/>
        <QuickResponseForm />
        <Footer />
        </>
    )
}

export default ExpertiseDetailed