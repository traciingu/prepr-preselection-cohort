import React from 'react';

const Introduction = () => {
    return (
        <div className="intro">
                <img src={require('./images/blue-person-silhouette.png')} />
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
    );
}

export default Introduction;