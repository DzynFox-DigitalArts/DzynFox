import ExpertiseTile from "../../components/ExpertiseTile"

const OurExpertise = () => {
    return(
        <section className="ourExpertise">
            <h1 className="section-header">A One-Stop-Design-Studio</h1>
            <h2 className="section-subheader">For all of your designing needs</h2>
            <p className="section-details">From designing your logo to all your branding essentials, everything at one place</p>
            <div className="expertise-container">
                <ExpertiseTile name={"Logo Design"} faIconName={"fas fa-blog"} />
                <ExpertiseTile name={"Graphic Design"} faIconName={"fas fa-swatchbook"} />
                <ExpertiseTile name={"Advertisement Design"} faIconName={"fas fa-ad"} />
                <ExpertiseTile name={"Creative Writing"} faIconName={"fas fa-paragraph"} />
                <ExpertiseTile name={"Video Presentation"} faIconName={"fas fa-video"} />
                <ExpertiseTile name={"Brochure/Catalogue Design"} faIconName={"fas fa-file"} />
                <ExpertiseTile name={"Newsletters/Magazines Design"} faIconName={"far fa-newspaper"} />
                <ExpertiseTile name={"Illustration"} faIconName={"fas fa-pen-nib"} />
                <ExpertiseTile name={"Photo Editing"} faIconName={"fas fa-images"} />
                <ExpertiseTile name={"Presentations"} faIconName={"fas fa-tv"} />
                <ExpertiseTile name={"T-Shirts, Cup, Mug, Pens Design"} faIconName={"fas fa-tshirt"} />
                <ExpertiseTile name={"Package, Labels and Sticker Design"} faIconName={"fas fa-receipt"} />
                <ExpertiseTile name={"Web Design"} faIconName={"fas fa-laptop-code"} />
                <ExpertiseTile name={"Promotional Campaign Design"} faIconName={"fas fa-sign"} />
                <ExpertiseTile name={"Leaflet/Handout Design"} faIconName={"fas fa-file-alt"} />
                <ExpertiseTile name={"Animation"} faIconName={"fas fa-walking"} />
                <ExpertiseTile name={"Branding"} faIconName={"far fa-lightbulb"} />
                <ExpertiseTile name={"Outdoor Ads"} faIconName={"fas fa-torii-gate"} />
                <ExpertiseTile name={"Banner/Poster Design"} faIconName={"fas fa-image"} />
                <ExpertiseTile name={"Social Media Ads"} faIconName={"fas fa-users"} />
            </div>
        </section>
    )
}

export default OurExpertise