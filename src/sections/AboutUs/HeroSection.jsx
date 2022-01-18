import AboutPNG from '../../drawables/about.png'

const HeroSection = () => {
    return(
        <main className="AboutUsHeroMain">
            <h1 className="section-header">We are <span className="accent-text">DzynFox</span></h1>
            <p className="section-subheader">We are designers.<br /> We think. We plan. We create.<br />We conceive new ideas and bring them to reality.<br />We are creative artists but design things for a purpose</p>
            <div className="AboutUsHeroMainContent">
                <img src={AboutPNG} alt="Men Discussing Idea" />
                <div className="AboutUsHeroContent">
                    <p>
                    We are a creative agency. We make things look pretty and attractive and ensure that they are liked by people they are meant for. We make sure that the design works and help you meet your objectives.
                    <span className="spacer"></span>
                        <span className="aboutus-subheader">Our mission</span> is to offer creative services and imaginative solutions to strengthen every creative opportunity. We cultivate both the business and its clients through successful visual solutions and do so with professionalism, enthusiasm and dedication.
                    <span className="spacer"></span> 
                    <span className="aboutus-subheader">Our vision</span> is to bring an original, inventive experience to the graphic design space.
                    <span className="spacer"></span> 
                    <span className="aboutus-subheader">Our primary goal</span> is to make the design process itself enjoyable for our clients. Our clients will be heard, understood and recognized to be the best in their respective domains.</p>
                </div>
            </div>
        </main>
    )
}

export default HeroSection;