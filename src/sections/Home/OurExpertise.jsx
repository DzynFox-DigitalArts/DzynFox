import ExpertiseTile from "../../components/ExpertiseTile"

const OurExpertise = () => {
    return(
        <section className="ourExpertise">
            <h1 className="section-header">A One-Stop-Design-Studio</h1>
            <h2 className="section-subheader">For all of your designing needs</h2>
            <p className="section-details">From designing your logo to all your branding essentials, everything at one place</p>
            <div className="expertise-container">
                <ExpertiseTile name={"Graphic Design"} faIconName={"fas fa-swatchbook"}  />
                <ExpertiseTile name={"Logo Design"} faIconName={"fas fa-icons"} />
                <ExpertiseTile name={"Social Media Ads"} faIconName={"fas fa-users"} />
                <ExpertiseTile name={"Web Design"} faIconName={"fas fa-laptop-code"} />

                <ExpertiseTile name={"Illustration"} faIconName={"fas fa-pen-nib"} />
                <ExpertiseTile name={"Animation"} faIconName={"fas fa-walking"} />
                <ExpertiseTile name={"Video Presentation"} faIconName={"fas fa-video"} />
                <ExpertiseTile name={"Branding"} faIconName={"far fa-lightbulb"} />
                
            </div>
            <a href="/expertise" className="secondaryBtn">See All Expertise</a>
        </section>
    )
}

export default OurExpertise