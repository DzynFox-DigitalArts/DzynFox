import './style.css'

import {useParams} from 'react-router-dom'
import HeroSection from '../../sections/ExpertiseDetailed/HeroSection'
import Portfolio from '../../sections/ExpertiseDetailed/Portfolio'
import QuickResponseForm from '../../components/QuickResponseForm.jsx'

import {useEffect} from 'react';
import {Helmet} from 'react-helmet'

import {analytics} from '../../firebase/firebase'
import {logEvent} from 'firebase/analytics'
import expertiseDetails from '../../data/expertiseDetails'
import JumpToExpertise from '../../sections/ExpertiseDetailed/JumpToExpertise'

const ExpertiseDetailed = () => {

    const {slug} = useParams();
    const expertiseName = expertiseDetails[slug].name;

    useEffect(() => {
        logEvent(analytics, 'expertise_details_page_visit')
    }, [])

    return(
        <>
        <Helmet>
            <title>{expertiseName} - DzynFox</title>
        </Helmet>
        <HeroSection slug={slug} />
        <Portfolio name={expertiseName} />
        <JumpToExpertise name={expertiseName}/>
        <QuickResponseForm />
        </>
    )
}

export default ExpertiseDetailed