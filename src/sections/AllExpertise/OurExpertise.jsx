import ExpertiseTile from "../../components/ExpertiseTile"

const OurExpertise = () => {
    return(
        <section className="ourExpertise">
            <h1 className="section-header">A One-Stop-Design-Studio</h1>
            <h2 className="section-subheader">For all of your designing needs</h2>
            <p className="section-details">From designing your logo to all your branding essentials, everything at one place</p>
            <div className="expertise-container">
                <ExpertiseTile name={"Logo Design"} faIconName={"fas fa-blog"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Graphic Design"} faIconName={"fas fa-swatchbook"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Advertisement Design"} faIconName={"fas fa-ad"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Creative Writing"} faIconName={"fas fa-paragraph"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Video Presentation"} faIconName={"fas fa-video"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Brochure/Catalogue Design"} faIconName={"fas fa-file"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Newsletters/Magazines Design"} faIconName={"far fa-newspaper"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Illustration"} faIconName={"fas fa-pen-nib"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Photo Editing"} faIconName={"fas fa-images"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Presentations"} faIconName={"fas fa-tv"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"T-Shirts, Cup, Mug, Pens Design"} faIconName={"fas fa-tshirt"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Package, Labels and Sticker Design"} faIconName={"fas fa-receipt"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Web Design"} faIconName={"fas fa-laptop-code"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Promotional Campaign Design"} faIconName={"fas fa-sign"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Leaflet/Handout Design"} faIconName={"fas fa-file-alt"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Animation"} faIconName={"fas fa-walking"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Branding"} faIconName={"far fa-lightbulb"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Outdoor Ads"} faIconName={"fas fa-torii-gate"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Banner/Poster Design"} faIconName={"fas fa-image"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <ExpertiseTile name={"Social Media Ads"} faIconName={"fas fa-users"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
            </div>
        </section>
    )
}

export default OurExpertise