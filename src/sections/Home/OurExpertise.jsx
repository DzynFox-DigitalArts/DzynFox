import ExpertiseTile from "../../components/ExpertiseTile"

const OurExpertise = () => {
    return(
        <section className="ourExpertise">
            <h1 className="section-header">A One-Stop-Design-Studio</h1>
            <h2 className="section-subheader">For all of your designing needs</h2>
            <p className="section-details">From designing your logo to all your branding essentials, everything at one place</p>
            <div className="expertise-container">
                <ExpertiseTile name={"Graphic Design"} faIconName={"fas fa-swatchbook"} />
                <ExpertiseTile name={"Advertisement Design"} faIconName={"fas fa-ad"} />
                <ExpertiseTile name={"Creative Writing"} faIconName={"fas fa-paragraph"} />
                <ExpertiseTile name={"Video Presentation"} faIconName={"fas fa-video"} />
                <ExpertiseTile name={"Brochure/Catalogue Design"} faIconName={"fas fa-file"} />
                <ExpertiseTile name={"Newsletters/Magazines Design"} faIconName={"far fa-newspaper"} />
                <ExpertiseTile name={"Illustration"} faIconName={"fas fa-pen-nib"} />
                <ExpertiseTile name={"Photo Editing"} faIconName={"fas fa-images"} />
            </div>
            <a href="/expertise" className="secondaryBtn">See All Expertise</a>
        </section>
    )
}

export default OurExpertise