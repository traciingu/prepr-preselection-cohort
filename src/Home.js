import React from 'react';
import Navbar from './Navbar';
import ServiceFeature from './ServiceFeature';
import Testimonial from './Testimonial';
import './styles/Home.css';
import './styles/Header.css';
import './styles/Introduction.css';
import './styles/Services.css';
import './styles/TestimonialSection.css';
import testimonials from './testimonials.json';



const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="header">
                <h2>Unlimited is Over Crowded</h2>
                <p>The word is real content during design can distract designers and design review
                teams alike away from the design, and insisting on always.</p>
                <input type="button" value="Hire Us Now" />
                <img src={require('./images/header-rocket.jpg')} />
            </div>

            <div className="intro">
                <img src={require('./images/blue-person-silhouette.png')} className="intro-image" />
                <div className="intro-title"><h4>Hello! My Name is <span style={{ color: "#3328ce" }}>Tracy Nguyen</span></h4></div>
                <div className="intro-paragraph">
                    <p>The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you
                    reach a review point you end up reviewing and negotiating the content. Design first, with real content in mind (of course!),
                    but don’t drop in the real content until the design is well on its way. Using filler text avoids the inevitable argumentation
                    that accompanies.</p>
                </div>
                <div className="intro-quote"><p>“Real content during design can distract designers and design review teams alike away from design insisting on
                always use publication-ready content a real drag on the design process.”</p></div>
                <div className="intro-paragraph"><p>Only use filler text that has been edited for length and format to match the characteristics of real content as closely as
                possible, and use real content where possible. Design is an evolutionary process, and filler text is just one tool in your
                progress-pushing arsenal. Use it where it makes sense to use it, and pull it once the natural process indicates.</p></div>
                <div className="intro-conclusion"><p>I learned finally quality, time, price, are inverve proposal!</p></div>
            </div>

            <div className="services">
                <h4 className="services-title">Like Tracy, We don’t your step-back from your success
            <br /><span className="services-title2">Need Quality? have Time? Hire Us</span>
                    <br /><span className="services-title3">For</span></h4>

                <div className="service-features-container">
                    <ServiceFeature featureImg={require('./images/pie-graph-icon.png')}
                        featureTitle="Product Design"
                        featureText="Li Europan lingues es membres del
                    sam familie. Lor separat existentie es
                    un myth por scientie" />
                    <ServiceFeature featureImg={require('./images/graph-increase.png')}
                        featureTitle="Development"
                        featureText="At solmen va esser necessi far uniform grammatica, 
                    pronunciation elu sommun paroles"/>
                    <ServiceFeature featureImg={require('./images/flask-icon.png')}
                        featureTitle="Testings"
                        featureText="Omnicos directe al desirabilite de un
                    nov lingua franca: On refusa
                    continuar payar custosi traductores"/>
                    <ServiceFeature featureImg={require('./images/rocket-icon.png')}
                        featureTitle="Deployment"
                        featureText="Li lingues differe solmen in li
                    grammatica, li pronunciation e li plu
                    commun vocabules"/>
                </div>
            </div>

            <div className="testimonial-section">
                <h3 className="testimonial-section-title">See what Jenny, Giga, and Davis are saying about us</h3>
                <div className="testimonial-container">{testimonials.map((testimonial, index) => <Testimonial testimonial={testimonial} key={index} />)}</div>
            </div>
        </div>
    );
};

export default Home;