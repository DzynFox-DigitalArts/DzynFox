import './style.css'

import Navbar from "../../components/Navbar"
import HeroSection from "../../sections/Home/HeroSection";
import OurExpertise from '../../sections/Home/OurExpertise';
import WhyUs from '../../sections/Home/WhyUs';
import StatsSection from '../../sections/Home/StatsSection';
import TestimonialSection from '../../sections/Home/TestimonialSection';
import ContactForm from '../../sections/Home/ContactForm';
import OurClients from '../../sections/Home/OurClients';
import OtherBrands from '../../sections/Home/OtherBrands';
import Footer from '../../components/Footer';
import {helmetJsonLdProp} from 'react-schemaorg'
import { Helmet } from 'react-helmet'; 

const Home = () => {
    return(
        <>
            <Helmet script={[
                helmetJsonLdProp(
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "DzynFox",
                        "alternateName": "DzynFox Visual Communications",
                        "url": "https://dzynfox.com",
                        "logo": "https://dzynfox.com/static/media/logo.1421c163d9faae803778.png",
                        "contactPoint": {
                          "@type": "ContactPoint",
                          "telephone": "+919354566860",
                          "contactType": "sales",
                          "areaServed": "IN",
                          "availableLanguage": ["en","Hindi"]
                        },
                        "sameAs": [
                          "https://www.facebook.com/DzynFox-Visual-Communications-105250575387678/",
                          "https://www.instagram.com/dzynfox/",
                          "https://www.youtube.com/channel/UC6ZfkNO_QGy2RvPckmQ_tdw",
                          "https://www.linkedin.com/company/dzynfox/",
                          "https://dzynfox.com"
                        ]
                    }
                )
            ]}>

            </Helmet>
            <Navbar />
            <HeroSection />
            <WhyUs />
            <OurExpertise />
            <TestimonialSection />
            <StatsSection />
            <OurClients />
            <ContactForm />
            <OtherBrands />
            <Footer />
        </>
    )
}

export default Home;