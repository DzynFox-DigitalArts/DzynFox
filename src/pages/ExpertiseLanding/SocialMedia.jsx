import { Helmet } from 'react-helmet'
import HeroSection from '../../sections/ExpertiseDetailed/HeroSection'
import '../../pages/ExpertiseDetailed/style.css';
import Portfolio from '../../sections/ExpertiseDetailed/Portfolio';
import JumpToExpertise from '../../sections/ExpertiseDetailed/JumpToExpertise';
import QuickResponseForm from '../../components/QuickResponseForm.jsx';

const SocialMedia = () => {
    return (
        <div className="SocialMediaLanding">
            <Helmet>
                <title>Social Media Marketing - DzynFox</title>
            </Helmet>
            <HeroSection slug={'social-media-marketing'} />
            <Portfolio name={"Social Media Marketing"} />
            <JumpToExpertise name={"Social Media Marketing"}/>
            <QuickResponseForm />
        </div>
    )
}

export default SocialMedia