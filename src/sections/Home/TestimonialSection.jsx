import TestimonialCard from "../../components/TestimonialCard"
import {useEffect, useState} from 'react'

import sanityClient from '../../sanity/client';

const TestimonialSection = () => {

    const [allTestimonials, setAllTestimonials] = useState([]);

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "testimonials"]{
            name,
            company,
            review,
            image {
                asset->{
                    url
                }
            }
        }`
          )
          .then((data) => {
                setAllTestimonials(data);
            })
          .catch(console.error);
    }, []);

    return(
        <section className="TestimonialSection">
            <h2 className="section-subheader">Don't take our words for it</h2>
            <h1 className="section-header">See what our customers say</h1>
            <div className="testimonialsContainer">
                {allTestimonials && allTestimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} name={testimonial.name} organisation={testimonial.company} imgUrl={testimonial.image.asset.url} testimonial={testimonial.review}/>
                ))}
            </div>
        </section>
    )
}

export default TestimonialSection