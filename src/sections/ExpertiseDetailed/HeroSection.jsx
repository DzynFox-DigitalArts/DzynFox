import WhyUsTile from '../../components/WhyUsTile'

import expertiseDetails from '../../data/expertiseDetails'

const HeroSection = ({name}) => {
    return(
        <main className="expertiseDetailedHero">
            <h2 className="section-subheader">Lets improve your branding through</h2>
            <h1 className="section-header">{name}</h1>
            <p>{expertiseDetails[name].desc !== undefined ? expertiseDetails[name].desc : "We are currently working on this"}</p>
            <div className="ourFeatures">
                <h1 className="section-subheader">You won't be disappointed! <br /> Your project is in <span className="accent-text">our hands</span></h1>
                {expertiseDetails[name].subServices && 
                <div className="features">
                    {expertiseDetails[name].subServices.map((service, index) => (
                        <p key={index}>{service}</p>
                    ))}
                </div>
                }
            </div>
        </main>
    )
}

export default HeroSection