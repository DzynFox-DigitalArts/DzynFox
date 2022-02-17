import expertiseDetails from '../../data/expertiseDetails'

const HeroSection = ({slug}) => {

    const expertiseName = expertiseDetails[slug].name;

    return(
        <main className="expertiseDetailedHero">
            <h2 className="section-subheader">Lets improve your branding through</h2>
            <h1 className="section-header">{expertiseName}</h1>
            <pre>{expertiseDetails[slug].desc !== undefined ? expertiseDetails[slug].desc : "We are currently working on this"}</pre>
            <div className="ourFeatures">
                <h1 className="section-subheader">You won't be disappointed! <br /> Your project is in <span className="accent-text">our hands</span></h1>
                {expertiseDetails[slug].subServices && 
                <div className="features">
                    {expertiseDetails[slug].subServices.map((service, index) => (
                        <p key={index}>{service}</p>
                    ))}
                </div>
                }
            </div>
        </main>
    )
}

export default HeroSection