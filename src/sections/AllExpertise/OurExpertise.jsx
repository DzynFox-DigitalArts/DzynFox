import ExpertiseTile from "../../components/ExpertiseTile"

const OurExpertise = () => {
    return(
        <section className="ourExpertise">
            <h1 className="section-header">A One-Stop-Design-Studio</h1>
            <h2 className="section-subheader">For all of your designing needs</h2>
            <p className="section-details">From designing your logo to all your branding essentials, everything at one place</p>
            <div className="expertise-container">

                <ExpertiseTile name={"Graphic Design"} faIconName={"fas fa-swatchbook"} />
                <ExpertiseTile name={"Illustration"} faIconName={"fas fa-pen-nib"} />
                <ExpertiseTile name={"Animation"} faIconName={"fas fa-walking"} />
                <ExpertiseTile name={"Web Design"} faIconName={"fas fa-laptop-code"} />

                <ExpertiseTile name={"Photo Editing"} faIconName={"fas fa-images"} />
                <ExpertiseTile name={"Video Editing"} faIconName={"fas fa-laptop-code"} />
                <ExpertiseTile name={"Video Presentation"} faIconName={"fas fa-video"} />
                <ExpertiseTile name={"Voice Overs / Narrations"} faIconName={"fas fa-laptop-code"} />
                
                <ExpertiseTile name={"Creative Writing"} faIconName={"fas fa-paragraph"} />
                <ExpertiseTile name={"Presentations"} faIconName={"fas fa-tv"} />
                <ExpertiseTile name={"Brand Identity"} faIconName={"fas fa-laptop-code"} />
                <ExpertiseTile name={"Branding"} faIconName={"fas fa-blog"} />
            </div>
        </section>
    )
}

export default OurExpertise