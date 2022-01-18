import ExpertiseTile from "../../components/ExpertiseTile"

const OurExpertise = () => {
    return(
        <section className="ourExpertise">
            <h1 className="section-header">A One-Stop-Design-Studio</h1>
            <h2 className="section-subheader">For all of your designing needs</h2>
            <p className="section-details">From designing your logo to all your branding essentials, everything at one place</p>
            <div className="expertise-container">
                <ExpertiseTile name={"Graphic Design"} faIconName={"fas fa-swatchbook"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Advertisement Design"} faIconName={"fas fa-ad"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Creative Writing"} faIconName={"fas fa-paragraph"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Video Presentation"} faIconName={"fas fa-video"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Brochure/Catalogue Design"} faIconName={"fas fa-file"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Newsletters/Magazines Design"} faIconName={"far fa-newspaper"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Illustration"} faIconName={"fas fa-pen-nib"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Photo Editing"} faIconName={"fas fa-images"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
            </div>
        </section>
    )
}

export default OurExpertise