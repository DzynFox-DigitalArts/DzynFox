import WhyUsTile from "../../components/WhyUsTile";

const WhyUs = () => {
    return(
        <section className="whyUs">
            <h1 className="section-header marker">Why Choose Us?</h1>
            <div className="whyUsContent">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste vero tenetur autem. Sequi, iusto sunt provident aperiam voluptatum at.</p>
                <div className="whyUsTilesContainer">
                <WhyUsTile faIconName={'fas fa-bezier-curve'} name={"Best in Class Design"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, numquam. Facere optio laborum maiores saepe quasi quos, quo rem voluptatibus!"}/>
                <WhyUsTile faIconName={'fas fa-bezier-curve'} name={"Best in Class Design"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, numquam. Facere optio laborum maiores saepe quasi quos, quo rem voluptatibus!"}/>
                <WhyUsTile faIconName={'fas fa-bezier-curve'} name={"Best in Class Design"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, numquam. Facere optio laborum maiores saepe quasi quos, quo rem voluptatibus!"}/>
                <WhyUsTile faIconName={'fas fa-bezier-curve'} name={"Best in Class Design"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, numquam. Facere optio laborum maiores saepe quasi quos, quo rem voluptatibus!"}/>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;