import ExpertiseTile from "../../components/ExpertiseTile"

const OurExpertise = () => {
    return(
        <section className="ourExpertise">
            <h1 className="section-header">A One-Stop-Design-Studio</h1>
            <h2 className="section-subheader">For all of your designing needs</h2>
            <p className="section-details">From designing your logo to all your branding essentials, everything at one place</p>
            <div className="expertise-container">

                <ExpertiseTile name={"Graphic Design"} faIconName={"fas fa-swatchbook"} imgUrl={"https://image.freepik.com/free-vector/graphic-designer-workplace_52683-5306.jpg"} />
                <ExpertiseTile name={"Logo Design"} faIconName={"fas fa-blog"} imgUrl="https://image.freepik.com/free-vector/logo-design-company-slogan-creating-corporate-branding-identity-graphic-designer-flat-character-researching-competitive-logotype-idea_335657-190.jpg" />
                <ExpertiseTile name={"Social Media Ads"} faIconName={"fas fa-users"} />
                <ExpertiseTile name={"Web Design"} faIconName={"fas fa-laptop-code"} />

                <ExpertiseTile name={"Banner/Poster Design"} faIconName={"fas fa-image"} />
                <ExpertiseTile name={"Advertisement Design"} faIconName={"fas fa-ad"} imgUrl={"https://img.freepik.com/free-vector/design-team-concept-illustration_114360-4531.jpg?size=626&ext=jpg"}/>
                <ExpertiseTile name={"Promotional Campaign Design"} faIconName={"fas fa-sign"} />
                <ExpertiseTile name={"Outdoor Ads"} faIconName={"fas fa-torii-gate"} />

                <ExpertiseTile name={"Branding"} faIconName={"far fa-lightbulb"} />
                <ExpertiseTile name={"T-Shirts, Cup, Mug, Pens Design"} faIconName={"fas fa-tshirt"} />
                <ExpertiseTile name={"Package, Labels and Sticker Design"} faIconName={"fas fa-receipt"} />
                <ExpertiseTile name={"Leaflet/Handout Design"} faIconName={"fas fa-file-alt"} />

                <ExpertiseTile name={"Illustration"} faIconName={"fas fa-pen-nib"} />
                <ExpertiseTile name={"Photo Editing"} faIconName={"fas fa-images"} />
            </div>
        </section>
    )
}

export default OurExpertise