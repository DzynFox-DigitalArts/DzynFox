import ExpertiseTile from "../../components/ExpertiseTile"

const OurExpertise = () => {
    return(
        <section className="ourExpertise">
            <h1 className="section-header">A One-Stop-Design-Studio</h1>
            <h2 className="section-subheader">For all of your designing needs</h2>
            <p className="section-details">From designing your logo to all your branding essentials, everything at one place</p>
            <div className="expertise-container">
                <ExpertiseTile name={"Logo Design"} faIconName={"fas fa-blog"} imgUrl="https://image.freepik.com/free-vector/logo-design-company-slogan-creating-corporate-branding-identity-graphic-designer-flat-character-researching-competitive-logotype-idea_335657-190.jpg" />
                <ExpertiseTile name={"Graphic Design"} faIconName={"fas fa-swatchbook"} imgUrl={"https://image.freepik.com/free-vector/graphic-designer-workplace_52683-5306.jpg"} />
                <ExpertiseTile name={"Advertisement Design"} faIconName={"fas fa-ad"} imgUrl={"https://img.freepik.com/free-vector/design-team-concept-illustration_114360-4531.jpg?size=626&ext=jpg"}/>
                <ExpertiseTile name={"Creative Writing"} faIconName={"fas fa-paragraph"} imgUrl={"https://image.freepik.com/free-vector/diary-concept-illustration_114360-4158.jpg"}/>
                <ExpertiseTile name={"Video Presentation"} faIconName={"fas fa-video"} imgUrl={"https://image.freepik.com/free-vector/data-analytics-online-video-tutorial-statistics-internet-presentation-business-development-course-webinar-business-analysis-corporate-seminar_335657-3444.jpg"}/>
                <ExpertiseTile name={"Brochure/Catalogue Design"} faIconName={"fas fa-file"} imgUrl={"https://image.freepik.com/free-vector/design-community-concept-illustration_114360-1244.jpg"}/>
                <ExpertiseTile name={"Illustration"} faIconName={"fas fa-pen-nib"} imgUrl={"https://image.freepik.com/free-vector/hand-drawn-flat-people-talking_23-2149051163.jpg"}/>
                <ExpertiseTile name={"Photo Editing"} faIconName={"fas fa-images"} imgUrl={"https://image.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg"}/>
            </div>
            <a href="/expertise" className="secondaryBtn">See All Expertise</a>
        </section>
    )
}

export default OurExpertise