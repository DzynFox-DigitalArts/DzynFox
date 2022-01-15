import animation from '../../drawables/hero.gif'

const HeroSection = () => {
    return(
        <div class="main-container">
            <main>
                <div class="main-content" data-aos="fade-right">
                    <h1><span class="accent-text">Creativity <span class="accentBlack">and</span> Imagination</span> are the world's greatest weapons<br/>on this planet</h1>
                    <div class="desc">
                        <p>We have them in abundance</p>
                        <p class="redp">Have us to grow your business</p>
                    </div>
                    <a href="" class="link-button">Explore Our Expertise</a>
                </div>
                <div class="hero-img" data-aos="fade-up">
                    <img src={animation} alt="Creativity"/>
                </div>
            </main>
        </div>
    )
}

export default HeroSection;