import TestimonialCard from "../../components/TestimonialCard"

const TestimonialSection = () => {
    return(
        <section className="TestimonialSection">
            <h2 className="section-subheader">Don't take our words for it</h2>
            <h1 className="section-header">See what our customers say</h1>
            <div className="testimonialsContainer">
                <TestimonialCard name={"Dr. Nidhi Khurana"} organisation={"Founder/CEO, GoGlobalWays"} imgUrl={"https://goglobalways.com/wp-content/uploads/2020/08/dr-nidhi-khurana.jpg"} testimonial={"Graphyyy is a wonderful creative agency. They serve a variety of designs. The originality of ideas and presentations are really amazing"}/>
                <TestimonialCard name={"Dr. Nidhi Khurana"} organisation={"Founder/CEO, GoGlobalWays"} imgUrl={"https://goglobalways.com/wp-content/uploads/2020/08/dr-nidhi-khurana.jpg"} testimonial={"Graphyyy is a wonderful creative agency. They serve a variety of designs. The originality of ideas and presentations are really amazing"}/>
                <TestimonialCard name={"Dr. Nidhi Khurana"} organisation={"Founder/CEO, GoGlobalWays"} imgUrl={"https://goglobalways.com/wp-content/uploads/2020/08/dr-nidhi-khurana.jpg"} testimonial={"Graphyyy is a wonderful creative agency. They serve a variety of designs. The originality of ideas and presentations are really amazing"}/>
            </div>
        </section>
    )
}

export default TestimonialSection