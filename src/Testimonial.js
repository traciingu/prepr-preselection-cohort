import React from 'react';
import './styles/Testimonial.css';

const Testimonial = ({ testimonial }) => {
    return (
        <div className="testimonial">
            <img src={require('./images/open-quotations.png')} />
            <p className="testimonial-review">{`"${testimonial.testimonial}"`}</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-title">{testimonial.title}</p>
            <div className="testimonial-image-container"><img src={testimonial.image} className="testimonial-image"/></div>
        </div>
    );
};


export default Testimonial;