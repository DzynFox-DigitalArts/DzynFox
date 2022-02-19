import './style.css';
import '../../pages/ExpertiseDetailed/style.css';
import { Helmet } from 'react-helmet'
import Portfolio from '../../sections/ExpertiseDetailed/Portfolio';
import JumpToExpertise from '../../sections/ExpertiseDetailed/JumpToExpertise';
import QuickResponseForm from '../../components/QuickResponseForm.jsx';
import SMMHero from '../../drawables/SMMHero.jpg';

const SocialMedia = () => {
    return (
        <div className="SocialMediaLanding expertiseLanding">
            <Helmet>
                <title>Social Media Marketing - DzynFox</title>
            </Helmet>
            <main className="expertiseLandingHero">
                <div className="text">
                <h1>We make social media marketing accessible for everyone</h1>
                <p>
                    Social Media is more of sociology &amp; psychology than technology. It demands creativity.
                    Social Media Posts require the right content, to the right people, at the right time.
                    More important than content is context. Therefore, content strategy is very important.
                    Quality of content is just as important as quantity. It’s the quality of the visuals that can command
                    the attention of a high speed scroller. And we can create the impact.
                </p>
                <button type="button" className="contactBtn">Raise a Query</button>
                </div>
                <img src={SMMHero} alt={"Social Media Marketing"}/>
            </main>
            <section>
                <p>
                Our services include: <br /> <br />
                1. Creating a social media design strategy <br />
                2. Designing your page with the right content and the cover photo <br />
                3. Creating a post calendar <br />
                4. Creating the content & the designs <br />
                5. Creating the post narrations with useful keywords <br />
                6. Choosing the trending hashtags <br />
                </p>
            </section>
            <section>
                <p>
                The various types of post designs are: <br /> <br />
                1. Date posts <br />
                2. Creative posts <br />
                3. Ad posts <br />
                4. Festival posts <br />
                5. Remembrance posts <br />
                6. Trending posts <br />
                7. Quizzes <br />
                8. Games <br />
                9. Polls <br />
                10. Contests <br />
                </p>
            </section>
            <Portfolio name={"Social Media Marketing"} />
            <JumpToExpertise name={"Social Media Marketing"}/>
            <QuickResponseForm/>
        </div>
    )
}

export default SocialMedia