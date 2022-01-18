import Fox from '../../drawables/fox.png'

const OurPhilosophy = () => {
    return(
        <section className="OurPhilosophy">
            <h1 className="section-header">Our Philosophy</h1>
            <div className="AboutUsHeroContentSecondary">
                <div className="AboutUsHeroContent">
                    <p>
                    The <span className="aboutus-subheader">triangular face</span> of fox represents demonstration, insight, discovery and higher outlook. It is often used to mark growth. Triangle also symbolizes strength.
                    <span className="spacer"></span>
                    The <span className="aboutus-subheader">pointed ears</span> of fox signifies observant and perfectionist. People with pointed ears are like Sherlock Holmes - highly perspective. They notice things that others don't. They have the tendency to dwell on things, as they want everything to be just right.
                    <span className="spacer"></span>
                    Fax has an <span className="aboutus-subheader">elongated rostrum</span>. Elongation indicates a better quality material. It signifies the capability to stretch out without becoming weaker in the process. The more elongated a fax is, the more formidable it is.
                    <span className="spacer"></span>
                    Fox has <span className="aboutus-subheader">bushy tail</span> that signifies it's eagerness, readiness and excitement to do something. Fox's thick tail aids its balance. The bushy tail also acts as it's protection during the winters.
                    <span className="spacer"></span>
                    Fox symbolizes cleverness, independence, playfulness and mischievousness, beauty, protection and good luck. Fox represents itself as a helper and a guide for active and motivated individuals. 
                    </p>
                </div>
                <img src={Fox} alt="Men Discussing Idea" />
            </div>
        </section>
    )
}

export default OurPhilosophy;