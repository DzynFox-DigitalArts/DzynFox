
import QuickResponseForm from '../../components/QuickResponseForm.jsx';
import OurExpertise from '../../sections/AllExpertise/OurExpertise';

import {useEffect} from 'react';
import {Helmet} from 'react-helmet'
import {analytics} from '../../firebase/firebase'
import {logEvent} from 'firebase/analytics'
import ScrollToTopBtn from '../../components/ScrollToTopBtn';

const AllExpertise = () => {

    useEffect(() => {
        logEvent(analytics, 'all_expertise_page_visit')
    }, [])

    return(
        <>
        <Helmet>
            <title>Our Expertise - DzynFox</title>
        </Helmet>
        <OurExpertise />
        <QuickResponseForm />
        <ScrollToTopBtn />
        </>
    )
}

export default AllExpertise