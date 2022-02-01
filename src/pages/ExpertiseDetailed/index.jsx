import './style.css'

import Navbar from '../../components/Navbar'
import {useParams} from 'react-router-dom'
import HeroSection from '../../sections/ExpertiseDetailed/HeroSection'
import Footer from '../../components/Footer'
import Portfolio from '../../sections/ExpertiseDetailed/Portfolio'
import QuickResponseForm from '../../components/QuickResponseForm.jsx'

const ExpertiseDetailed = () => {

    const {name} = useParams();

    return(
        <>
        <Navbar />
        <HeroSection name={name} />
        <Portfolio name={name} />
        <QuickResponseForm />
        <Footer />
        </>
    )
}

export default ExpertiseDetailed