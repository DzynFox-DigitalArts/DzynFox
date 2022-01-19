import WhyUsTile from '../../components/WhyUsTile'

const HeroSection = ({name}) => {
    return(
        <main className="expertiseDetailedHero">
            <h2 className="section-subheader">Lets improve your branding through</h2>
            <h1 className="section-header">{name}</h1>
            <p>We believe that design is about more than just being pretty. It's about purposeful use of pictures, illustrations, and layouts to sell ideas, products and services. Every company has a story that makes it unique and that story should be compelling and inspiring. Our experiential design process creates emotion and engagement between the brand and consumer through graphic design. Branding plays a key role in helping your company establish a unique presence in the marketplace, whilst differentiating from their competitors. The branding process can help your business to create a unique name, story, strategy, and visual brand identity.</p>
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