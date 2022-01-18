import Navbar from '../../components/Navbar'
import {useParams} from 'react-router-dom'
import HeroSection from '../../sections/ExpertiseDetailed';

const ExpertiseDetailed = () => {

    const {name} = useParams();

    return(
        <>
        <Navbar />
        <HeroSection name={name} />
        </>
    )
}

export default ExpertiseDetailed