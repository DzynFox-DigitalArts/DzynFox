import './style.css'

const TestimonialCard = ({testimonial, name, organisation, imgUrl}) => {
    return (
        <div className="TestimonialCard">
            <div className="review">
                <i className="fas fa-quote-left qouteMark"></i>
                <p>{testimonial}</p>
            </div>
            <div className="reviewer">
                <div className="reviewerdetails">
                    <p className="reviewerName">{name}</p>
                    <p className="reviewerDes">{organisation}</p>
                </div>
                <img className='reviewerImage' src={imgUrl} alt={name} />
            </div>
        </div>
    )
}

export default TestimonialCard