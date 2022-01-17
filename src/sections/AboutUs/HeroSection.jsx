import Fox from '../../drawables/fox.png'
import AboutPNG from '../../drawables/about.png'

const HeroSection = () => {
    return(
        <main className="AboutUsHeroMain">
            <h1 className="section-header">We are <span className="accent-text">DzynFox</span></h1>
            <p className="section-subheader">We are designers. We think. We plan. We create.We conceive new ideas and bring them to reality. We are creative artists but design things for a purpose</p>
            <div className="AboutUsHeroMainContent">
                <img src={AboutPNG} alt="Men Discussing Idea" />
                <div className="AboutUsHeroContent">
                    <p>Our mission is to offer creative services and imaginative solutions to strengthen every creative opportunity. We cultivate both the business and its clients through successful visual solutions and do so with professionalism, enthusiasm and dedication.
                    <span className="spacer"></span> 
                    Our vision is to bring an original, inventive experience to the graphic design space.
                    <span className="spacer"></span> 
                    Our primary goal is to make the design process itself enjoyable for our clients. Our clients will be heard, understood and recognized to be the best in their respective domains.</p>
                </div>
            </div>
            <div className="AboutUsHeroContentSecondary">
                <div className="AboutUsHeroContent">
                    <p>
                    The triangular face of fox represents demonstration, insight, discovery and higher outlook. It is often used to mark growth. Triangle also symbolizes strength.
                    <span className="spacer"></span>
                    The pointed ears of fox signifies observant and perfectionist. People with pointed ears are like Sherlock Holmes - highly perspective. They notice things that others don't. They have the tendency to dwell on things, as they want everything to be just right.
                    <span className="spacer"></span>
                    Fax has an elongated rostrum. Elongation indicates a better quality material. It signifies the capability to stretch out without becoming weaker in the process. The more elongated a fax is, the more formidable it is.
                    <span className="spacer"></span>
                    Fox has bushy tail that signifies it's eagerness, readiness and excitement to do something. Fox's thick tail aids its balance. The bushy tail also acts as it's protection during the winters.
                    <span className="spacer"></span>
                    Fox symbolizes cleverness, independence, playfulness and mischievousness, beauty, protection and good luck. Fox represents itself as a helper and a guide for active and motivated individuals. 
                    </p>
                </div>
                <img src={Fox} alt="Men Discussing Idea" />
            </div>
        </main>
    )
}

export default HeroSection;