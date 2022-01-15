import WhyUsTile from "../../components/WhyUsTile";

const WhyUs = () => {
    return(
        <section className="whyUs">
            <h1 className="section-header marker">Why Choose Us?</h1>
            <div className="whyUsContent">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste vero tenetur autem. Sequi, iusto sunt provident aperiam voluptatum at.</p>
                <div className="whyUsTilesContainer">
                    <WhyUsTile />
                    <WhyUsTile />
                    <WhyUsTile />
                    <WhyUsTile />
                </div>
            </div>
        </section>
    )
}

export default WhyUs;