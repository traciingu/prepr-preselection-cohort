import React from 'react';
import './styles/ServiceFeature.css';

const ServiceFeature = ({featureImg, featureTitle, featureText}) => {
    return (
        <div className="service-feature">
            <img src={featureImg}/>
            <p className="service-feature-title">{featureTitle}</p>
            <p className="service-feature-description">{featureText}</p>
        </div>
    );
};

export default ServiceFeature;