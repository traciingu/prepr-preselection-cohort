import React from 'react';

const ServiceFeature = ({featureImg, featureTitle, featureText}) => {
    return (
        <div className="service-feature">
            <img src={featureImg}/>
            <p>{featureTitle}</p>
            <p>{featureText}</p>
        </div>
    );
};

export default ServiceFeature;