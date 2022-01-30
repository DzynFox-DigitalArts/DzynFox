import PageLoadAnimation from '../../components/PageLoadAnimation';
import animation from '../../drawables/heroNew.gif'

const HeroSection = () => {
    return(
        <div className="main-container">
            <PageLoadAnimation />
            <main className='HomeHeroMain'>
                <div className="main-content" data-aos="fade-right">
                    <h1><span className="accent-text">Creativity <span className="accentBlack">&amp;</span> Imagination</span> are the world's greatest weapons<br/>on this planet</h1>
                    <div className="desc">
                        <p>We have them in abundance</p>
                        <p className="redp">Have us to grow your business</p>
                    </div>
                </div>
                <div className="hero-img" data-aos="fade-up">
                    <img src={animation} alt="Creativity"/>
                </div>
            </main>
        </div>
    )
}

export default HeroSection;