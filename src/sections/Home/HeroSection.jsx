import animation from '../../drawables/heroNew.gif'

const HeroSection = () => {
    return(
        <div className="main-container">
            <main className='HomeHeroMain'>
                <div className="main-content" data-aos="fade-right">
                    <h1><span className="accent-text">Creativity <span className="accentBlack">and</span> Imagination</span> are the world's greatest weapons<br/>on this planet</h1>
                    <div className="desc">
                        <p>We have them in abundance</p>
                        <p className="redp">Have us to grow your business</p>
                    </div>
                    <a href="" className="link-button">Explore Our Expertise</a>
                </div>
                <div className="hero-img" data-aos="fade-up">
                    <img src={animation} alt="Creativity"/>
                </div>
            </main>
        </div>
    )
}

export default HeroSection;