import PageLoadAnimation from '../../components/PageLoadAnimation';
// import animation from '../../drawables/heroNew.gif'
import animation from '../../drawables/animation.mp4'

const HeroSection = () => {
    return(
        <div className="main-container">
            <PageLoadAnimation />
            <main className='HomeHeroMain'>
                <div className="main-content" data-aos="fade-right">
                    <h1><span className="accent-text">Creativity <span className="accentBlack">&amp;</span><br/> Imagination</span>are the world's greatest weapons<br/>on this planet</h1>
                    <div className="desc">
                        <p>We have them in abundance</p>
                        <p className="redp">Have us to grow your business</p>
                    </div>
                </div>
                <div className="hero-animation" data-aos="fade-up">
                    {/* <img src={animation} alt="Creativity"/> */}
                    <video autoPlay loop muted>
                        <source src={animation} type="video/webm"/>
                    </video>
                </div>
            </main>
        </div>
    )
}

export default HeroSection;