import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import QuickResponseForm from '../../components/QuickResponseForm.jsx';
import OurExpertise from '../../sections/AllExpertise/OurExpertise';

import {useEffect} from 'react';

import {analytics} from '../../firebase/firebase'
import {logEvent} from 'firebase/analytics'
import ScrollToTopBtn from '../../components/ScrollToTopBtn';

const AllExpertise = () => {

    useEffect(() => {
        logEvent(analytics, 'all_expertise_page_visit')
    }, [])

    return(
        <>
        <Navbar />
        <OurExpertise />
        <QuickResponseForm />
        <Footer />
        <ScrollToTopBtn />
        </>
    )
}

export default AllExpertise