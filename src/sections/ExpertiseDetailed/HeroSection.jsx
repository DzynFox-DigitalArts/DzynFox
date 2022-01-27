import WhyUsTile from '../../components/WhyUsTile'

import expertiseDetails from '../../data/expertiseDetails'

const HeroSection = ({name}) => {
    return(
        <main className="expertiseDetailedHero">
            <h2 className="section-subheader">Lets improve your branding through</h2>
            <h1 className="section-header">{name}</h1>
            <p>{expertiseDetails[name] !== undefined ? expertiseDetails[name] : "We are currently working on this"}</p>
            <div className="ourFeatures">
                <h1 className="section-subheader">You won't be disappointed! <br /> Your project is in <span className="accent-text">our hands</span></h1>
                <div className="features">
                    <WhyUsTile faIconName={'fas fa-swatchbook'} name={"Best in Class Design"} />
                    <WhyUsTile faIconName={'fas fa-clock'} name={"On Time Delivery"} />
                    <WhyUsTile faIconName={'fas fa-user'} name={"Customer-Centric Support Team"} />
                </div>
            </div>
        </main>
    )
}

export default HeroSection